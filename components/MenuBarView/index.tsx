import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export const MenuBarView = () => {
    const handlePressMenu = () => {
        Actions.drawerOpen();
    };
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPressOut={handlePressMenu}>
                <FontAwesome5 name="bars" style={[styles.text]} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        // alignSelf: 'flex-start',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 20,
        left: 20,
        zIndex: 100,
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginVertical: 6,
    },
});
