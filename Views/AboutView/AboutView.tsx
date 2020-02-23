import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { About } from '../../components/About';

export const AboutView = () => {
    return (
        <SafeAreaView style={styles.container}>
            <About />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
