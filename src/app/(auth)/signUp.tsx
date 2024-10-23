import ShareButton from "@/components/button/share.button";
import { View, Text, StyleSheet } from "react-native"
import { APP_COLOR } from "@/utils/constant";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ShareInput from "@/components/input/share.input";
import SocialButton from "@/components/button/social.button";
import { useState } from "react";
import { registerAPI } from "@/utils/api";
import Toast from 'react-native-root-toast';
import { LoginSchema } from "@/utils/validate.schema";
import { Formik } from "formik";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 50,
        gap: 10
    },
    heading: {
        marginBottom: 30,
        fontSize: 40,
        fontWeight: "600",
        color: "#000000"
    },
})

const SignUpPage = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignUp = async (email: string, password: string, name: string) => {
        try {
            setLoading(true)
            const res = await registerAPI(email, password, name);
            setLoading(false)
            if (res.data) {
                router.replace({
                    pathname: "/(auth)/verify",
                    params: {
                        email: email
                    }
                })
            } else {
                const m = Array.isArray(res.message)
                    ? res.message[0] : res.message;

                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.BLUE,
                    opacity: 1
                });
            }
            console.log(">>> check res: ", res.data)
        } catch (error) {
            console.log(">>> check error: ", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Formik
                    validationSchema={LoginSchema}
                    initialValues={{ email: '', password: '', name: '' }}
                    onSubmit={values => handleSignUp(values.email, values.password, values.name)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>
                            <Text style={styles.heading}>SIGN UP</Text>
                            <ShareInput
                                title="Full name"
                                keyboardType="email-address"
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                errors={errors.name}
                            />
                            <ShareInput
                                title="Email"
                                keyboardType="email-address"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                errors={errors.email}
                            />
                            <ShareInput
                                title="Password"
                                secureTextEntry={true}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                errors={errors.password}
                            />
                            <ShareButton
                                loading={loading}
                                title="SIGN UP"
                                onPress={handleSubmit}
                                textStyle={{
                                    textTransform: "uppercase",
                                    color: "#fff",
                                    paddingVertical: 5
                                }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    marginHorizontal: 50,
                                    marginTop: 20,
                                    marginBottom: 5,
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
                                >Already have an account?
                                </Text>
                                <Link href={"/(auth)/login"}>
                                    <Text style={{
                                        color: "blue",
                                        textDecorationLine: "underline"
                                    }}>Login.
                                    </Text>
                                </Link>
                            </View>
                            <SocialButton />
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}

export default SignUpPage;
