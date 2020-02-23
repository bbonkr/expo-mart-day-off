import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './Views/DrawerNavigation';

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    );
}
