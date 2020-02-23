import React from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { DrawerNavigator } from '../../navigation';
import { HomeView } from '../HomeView';
import { screenNames } from '../../constants';
import { AboutView } from '../AboutView';
import { StyleSheet } from 'react-native';

export const DrawerNavigation = () => {
    return (
        <DrawerNavigator.Navigator
            backBehavior="initialRoute"
            drawerStyle={styles.container}
            drawerType="slide"
        >
            <DrawerNavigator.Screen
                name={screenNames.home}
                component={HomeView}
                options={{
                    drawerIcon: props => (
                        <Icon
                            name="question"
                            style={{ fontSize: props.size, color: props.color }}
                        />
                    ),
                    drawerLabel: '오늘은 ...',
                }}
            />
            <DrawerNavigator.Screen
                name={screenNames.about}
                component={AboutView}
                options={{
                    drawerIcon: props => (
                        <Icon
                            name="info-circle"
                            style={{ fontSize: props.size, color: props.color }}
                        />
                    ),
                    drawerLabel: '정보',
                }}
            />
        </DrawerNavigator.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 120,
    },
});
