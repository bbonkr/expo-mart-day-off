import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

export const MenuBarView = () => {
    const navigation = useNavigation();
    const handlePressMenu = () => {
        navigation.toggleDrawer();
    };
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPressOut={handlePressMenu}>
                <Icon name="bars" style={[styles.text]} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        // alignSelf: 'flex-start',
        position: 'absolute',
        // top: (Platform.OS === 'ios' ? 44 : 0) + 30,
        top: 30,
        left: 20,
        zIndex: 100,
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginVertical: 6,
    },
});
