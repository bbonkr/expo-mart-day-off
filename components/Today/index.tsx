import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    RefreshControl,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const getWeekdayName = (weekday: number): string => {
    switch (weekday) {
        case 0:
            return '일';
        case 1:
            return '월';
        case 2:
            return '화';
        case 3:
            return '수';
        case 4:
            return '목';
        case 5:
            return '금';
        case 6:
            return '토';
        default:
            return '알 수 없음';
    }
};

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const dayOfWeek = date.getDay();

    return `${year}년 ${(month + 1)
        .toString()
        .padStart(2, '0')}월 ${day
        .toString()
        .padStart(2, '0')}일 ${getWeekdayName(dayOfWeek)}요일`;
};

const findSundays = (date: Date): Date[] => {
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
    ).getDate();
    let day = 1;
    const result: Date[] = [];
    let ordinal = 0;
    while (day <= lastDay) {
        const current = new Date(date.getFullYear(), date.getMonth(), day);
        const dayOfWeek = current.getDay();
        if (dayOfWeek === 0) {
            ordinal += 1;

            if (ordinal === 2 || ordinal === 4) {
                result.push(current);
            }
        }

        day += 1;
    }

    return result;
};

const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
};

const nextSundayIsDayOff = (dayOffSundays: Date[], date: Date): boolean => {
    let day = 1;

    while (day < 7) {
        const dateAdded = addDays(date, day);

        const found = dayOffSundays.find(x => isSameDay(x, dateAdded));

        if (found) {
            return true;
        }

        day += 1;
    }

    return false;
};

const isSameDay = (a: Date, b: Date): boolean => {
    if (a.getFullYear() === b.getFullYear()) {
        if (a.getMonth() === b.getMonth()) {
            if (a.getDate() === b.getDate()) {
                return true;
            }
        }
    }

    return false;
};

export const Today = () => {
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(greenColor);
    const [isDayOff, setIsDayOff] = useState(false);
    const [isNextSundayIsDayOff, setIsNextSundayIsDayOff] = useState(false);

    const getTargetDate = (days = 0): Date => {
        return addDays(new Date(), days);
    };

    const checkToday = (d: Date): void => {
        const sundays = findSundays(d);

        const found = sundays.find(x => isSameDay(x, d));

        setIsDayOff(!!found);
        setBackgroundColor(found ? redColor : greenColor);
        setIsNextSundayIsDayOff(nextSundayIsDayOff(sundays, d));
    };

    useEffect(() => {
        const targetDate = getTargetDate();
        setDate(targetDate);
        checkToday(targetDate);
    }, []);

    const handleRefresh = useCallback(() => {
        setLoading(true);
        try {
            const targetDate = getTargetDate();
            setDate(targetDate);
            checkToday(targetDate);
        } finally {
            setLoading(false);
        }
    }, [date]);

    const getIcon = (): string => {
        return Math.floor(Math.random() * 1000) % 2
            ? 'shopping-cart'
            : 'shopping-basket';
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            style={{ ...styles.container, backgroundColor }}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                    onRefresh={handleRefresh}
                    progressViewOffset={40}
                    tintColor="white"
                    titleColor="white"
                    title="날짜를 계산하는 중..."
                />
            }
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={[styles.text]}>{formatDate(date)}</Text>
            </View>
            <View style={styles.main}>
                <FontAwesome5
                    name={isDayOff ? 'shopping-bag' : getIcon()}
                    size={120}
                    color="white"
                />
                <Text style={[styles.text]}>{isDayOff ? '휴점' : '개점'}</Text>
            </View>
            <View style={styles.footer}>
                {!isDayOff && isNextSundayIsDayOff && (
                    <>
                        <Text style={[styles.text]}>
                            이번주 일요일은 마트가 쉬어요.
                        </Text>
                        <Text style={[styles.text]}>미리 장을 보세요.</Text>
                    </>
                )}
                {isDayOff && (
                    <>
                        <Text style={[styles.text]}>오늘은 마트가 쉬어요.</Text>
                        {/* <Text style={[styles.text]}>
                            전통시장으로 가볼까요?
                        </Text> */}
                    </>
                )}
            </View>
        </ScrollView>
    );
};

const redColor = '#ed2d2d';
const greenColor = '#00bf8f';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    main: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginVertical: 6,
    },
});
