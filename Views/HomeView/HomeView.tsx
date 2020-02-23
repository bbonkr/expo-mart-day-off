import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Today } from '../../components/Today';

export const HomeView = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Today />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
