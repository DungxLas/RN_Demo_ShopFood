import AppProvider from "context/app.context";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from 'react-native-root-siblings';
import { type ErrorBoundaryProps } from 'expo-router';
import { View, Text, Button, SafeAreaView } from "react-native";
import { APP_COLOR } from "@/utils/constant";

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
            <View style={{ flex: 1, paddingHorizontal: 10, gap: 15 }}>
                <View style={{
                    backgroundColor: "#333", padding: 10,
                    borderRadius: 3, gap: 10
                }}>
                    <Text style={{ color: "red", fontSize: 20 }}>
                        Something went wrong
                    </Text>
                    <Text style={{ color: "#fff" }}>{error.message}</Text>
                </View>
                <Button title="Try Again ?" onPress={retry} />
            </View>
        </SafeAreaView>
    );
}

const RootLayout = () => {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'white',
        },
    };

    return (
        <GestureHandlerRootView>
            <RootSiblingParent>
                <AppProvider>
                    {/* <SafeAreaView style={{ flex: 1 }}> */}
                    <ThemeProvider value={navTheme}>
                        <Stack
                            screenOptions={{
                                headerTintColor: APP_COLOR.BLUE,
                                headerTitleStyle: {
                                    color: 'black'
                                },
                            }}
                        >
                            <Stack.Screen
                                name="index"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(auth)/login"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(auth)/signUp"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(auth)/verify"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(auth)/welcome"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(tabs)"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(user)/product/[id]"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(user)/product/create.modal"
                                options={{
                                    headerShown: false,
                                    animation: "fade",
                                    presentation: "transparentModal",
                                }}
                            />
                            <Stack.Screen
                                name="(user)/product/update.modal"
                                options={{
                                    headerShown: false,
                                    animation: "fade",
                                    presentation: "transparentModal",
                                }}
                            />
                            <Stack.Screen
                                name="(user)/product/place.order"
                                options={{ headerTitle: "Xác nhận đơn hàng" }}
                            />
                            <Stack.Screen
                                name="(user)/account/info"
                                options={{ headerTitle: "Update info" }}
                            />

                        </Stack>
                    </ThemeProvider>
                    {/* </SafeAreaView> */}
                </AppProvider>
            </RootSiblingParent>
        </GestureHandlerRootView>
    )
}

export default RootLayout;