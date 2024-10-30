import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import ShareButton from "@/components/button/share.button";
import { loginAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router, Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import Toast from "react-native-root-toast";
import { LoginSchema } from "@/utils/validate.schema";
import { Formik } from "formik"
import { useCurrentApp } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },
})

const LoginPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setAppState } = useCurrentApp();

    const handleLogin = async (email: string, password: string) => {
        try {
            setLoading(true)
            const res = await loginAPI(email, password);
            setLoading(false)
            if (res.data) {
                await AsyncStorage.setItem("access_token", res.data.access_token)
                setAppState(res.data)
                router.replace("/(tabs)");
            } else {
                const m = Array.isArray(res.message)
                    ? res.message[0] : res.message;

                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });

                if (res.statusCode === 400) {
                    router.replace({
                        pathname: "/(auth)/verify",
                        params: { email, isLogin: 1 }
                    })
                }
            }
        } catch (error) {
            console.log(">>> check error: ", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                validationSchema={LoginSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => handleLogin(values.email, values.password)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 30
                            }}>LOGIN</Text>
                        </View>

                        <ShareInput
                            title="Email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                        />

                        <ShareInput
                            title="Password"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}
                        />

                        <View style={{ alignItems: "center", marginBottom: 10, marginTop: 25 }}>
                            <Link href={"/(auth)/reset.pass"}>
                                <Text style={{
                                    color: "blue",
                                }}>Forgot password?
                                </Text>
                            </Link>
                        </View>
                        <ShareButton
                            loading={loading}
                            title="LOGIN"
                            onPress={() => {
                                // handleSubmit as any
                                handleLogin(values.email, values.password)
                            }
                            }
                            textStyle={{
                                textTransform: "uppercase",
                                color: "#fff",
                                paddingVertical: 5
                            }}
                            btnStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                marginHorizontal: 50,
                                paddingVertical: 10,
                                backgroundColor: APP_COLOR.BLUE,

                            }}
                            pressStyle={{ alignSelf: "stretch" }}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "center",
                            gap: 10,
                        }}>
                            <Text style={{
                                color: "black",
                            }}
                            >Don't have an account?
                            </Text>
                            <Link href={"/(auth)/signUp"}>
                                <Text style={{
                                    color: "blue",
                                    textDecorationLine: "underline"
                                }}>Sign up.
                                </Text>
                            </Link>
                        </View>
                        <SocialButton />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default LoginPage;