import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import { COLORS, FONTSIZE, SPACING } from '../theme/Theme';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Feather, FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 6
                }
            }}
        >

            {/* HomeScreen */}
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <Entypo name="video" size={30} color={COLORS.Primary} />

                        ) : (
                            <Entypo name="video" size={30} color={COLORS.White} />
                        )
                }}
            />

            {/* SearchScreen */}
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <Feather name="search" size={30} color={COLORS.Primary} />
                        ) : (
                            <Feather name="search" size={30} color={COLORS.White} />
                        )
                }}
            />

            {/* TicketScreen */}
            <Tab.Screen name="Ticket" component={TicketScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <FontAwesome6 name="ticket" size={30} color={COLORS.Primary} />
                        ) : (
                            <FontAwesome6 name="ticket" size={30} color={COLORS.White} />
                        )
                }}
            />

            {/* UserAccountScreen */}
            <Tab.Screen name="UserAccount" component={UserAccountScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <AntDesign name="user" size={30} color={COLORS.Primary} />
                        ) : (
                            <AntDesign name="user" size={30} color={COLORS.White} />
                        )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_10,
        borderRadius: SPACING.space_18 * 10,
    },
});

export default TabNavigator;