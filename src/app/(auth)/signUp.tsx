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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10

    },
    heading: {
        fontSize: 40,
        fontWeight: "600",
        color: "#000000"
    },
})

const SignUpPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignUp = async () => {
        try {
            const res = await registerAPI(email, password, name);
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
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.heading}>SIGN UP</Text>
                <ShareInput
                    title="Full name"
                    value={name}
                    setValue={setName}

                />
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                    value={email}
                    setValue={setEmail}
                />
                <ShareInput
                    title="Password"
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                />
                <ShareButton
                    title="SIGN UP"
                    onPress={handleSignUp}
                    textStyle={{ color: "#fff", paddingVertical: 5, }}
                    pressStyle={{ alignSelf: "stretch" }}
                    buttonStyle={{
                        justifyContent: "center",
                        borderRadius: 30,
                        backgroundColor: APP_COLOR.BLUE,
                        paddingVertical: 10,
                        marginHorizontal: 50,
                        borderColor: "#505050",
                        borderWidth: 1
                    }}
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
        </SafeAreaView>

    )
}

export default SignUpPage;
