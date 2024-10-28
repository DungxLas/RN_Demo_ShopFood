import { APP_COLOR } from "@/utils/constant";
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {

    const getIcons = (routeName: string, focused: boolean, size: number) => {
        if (routeName === "index") {
            return (
                <MaterialCommunityIcons
                    name="food-fork-drink"
                    size={size}
                    color={focused ? APP_COLOR.BLUE : APP_COLOR.GREY}
                />)
        }
        if (routeName === "order") {
            return (
                <MaterialIcons
                    name="list-alt"
                    size={size}
                    color={focused ? APP_COLOR.BLUE : APP_COLOR.GREY}
                />)
        }
        if (routeName === "favorite") {
            return (
                <AntDesign
                    name={focused ? "heart" : "hearto"}
                    size={size}
                    color={focused ? APP_COLOR.BLUE : APP_COLOR.GREY}
                />)
        }
        if (routeName === "notification") {
            return (
                <Octicons
                    name={focused ? "bell-fill" : "bell"}
                    size={size}
                    color={focused ? APP_COLOR.BLUE : APP_COLOR.GREY}
                />)
        }

        if (routeName === "account") {
            return (
                <MaterialCommunityIcons
                    name={focused ? "account" : "account-outline"}
                    size={size}
                    color={focused ? APP_COLOR.BLUE : APP_COLOR.GREY}
                />)
        }

        return (<> </>)
    }

    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return getIcons(route.name, focused, size);
                },
                headerShown: false,
                tabBarLabelStyle: { paddingBottom: 3 },
                tabBarActiveTintColor: APP_COLOR.BLUE,
            })}

        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",

                }}
            />

            <Tabs.Screen
                name="order"
                options={{
                    title: "Order",

                }}
            />

            <Tabs.Screen
                name="favorite"
                options={{
                    title: "Favorite"
                }}
            />

            <Tabs.Screen
                name="notification"
                options={{
                    title: "Notification"
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Account"
                }}
            />

        </Tabs>
    )
}

export default TabLayout;