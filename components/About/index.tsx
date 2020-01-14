import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { MenuBarView } from '../MenuBarView';

export const About = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <MenuBarView />
            <View style={styles.header}>
                <Text style={[styles.text]}>정보</Text>
            </View>
            <View style={styles.main}>
                <Text style={[styles.text]}>오</Text>
            </View>
            <View style={styles.footer}>
                <Text style={[styles.text]}>
                    이번주 일요일은 마트가 쉬어요.
                </Text>
                <Text style={[styles.text]}>미리 장을 보세요.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aa8edd',
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
