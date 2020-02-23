import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { DrawerActions } from '@react-navigation/native';

export const Menu = () => {
    const handleMainPress = () => {
        DrawerActions.jumpTo('main');

        DrawerActions.closeDrawer();
    };

    const handleAboutPress = () => {
        DrawerActions.jumpTo('about');
        DrawerActions.closeDrawer();
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Header</Text>
            </View>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPressOut={handleMainPress}>
                    <Text style={styles.buttonText}>오늘은?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPressOut={handleAboutPress}>
                    <Text style={styles.buttonText}>정보</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bebebe',
    },
    headerContainer: {
        flex: 1,
    },
    mainContainer: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    footerContainer: {
        flex: 1,
    },
    buttonText: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        fontSize: 20,
        fontWeight: '300',
    },
});
