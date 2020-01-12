import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Today = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
            <View style={styles.main}>
                <Text>Main</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
