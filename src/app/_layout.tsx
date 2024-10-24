import { Stack } from "expo-router";
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
    return (
        <RootSiblingParent>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen
                        name="index"
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
                        name="(auth)/login"
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="(auth)/reset.pass"
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="(auth)/regisPhone"
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerTitle: "Home" }}
                    />

                    <Stack.Screen
                        name="product/index"
                        options={{ headerTitle: "Product" }}
                    />

                </Stack>
            </SafeAreaView>

        </RootSiblingParent>

    )
}

export default RootLayout;