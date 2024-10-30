import { Text, View } from "react-native"
import { router } from "expo-router";
import { useEffect } from "react";
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootPage = () => {
    const { setAppState } = useCurrentApp();

    useEffect(() => {
        async function prepare() {
            try {
                const res = await getAccountAPI();
                if (res.data) {
                    //success
                    setAppState({
                        user: res.data.user,
                        access_token: await AsyncStorage.getItem("access_token")
                    })
                    router.replace("/(tabs)")
                } else {
                    //error
                    router.replace("/(auth)/welcome")
                }
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    useEffect(() => {
        const fetchAccount = async () => {


        }
        fetchAccount()
    }, [])

    // if (true) {
    //     return (
    //         <Redirect href={"/(tabs)"} />
    //     )
    // }
    return (
        <>
            <View>
                <Text>Root Page</Text>
            </View>
        </>
    )
}

export default RootPage;