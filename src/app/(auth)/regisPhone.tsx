import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import ShareButton from "@/components/button/share.button";
import { registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router, Link } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import Toast from "react-native-root-toast";

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

const RegisPhonePage = () => {
    const [email, setEmail] = useState<string>("");

    const handleSignUp = async () => {
        // try {
        //     const res = await registerAPI(email, password);
        //     if (res.data) {
        //         router.navigate("/(auth)/verify")
        //     } else {
        //         const m = Array.isArray(res.message)
        //             ? res.message[0] : res.message;

        //         Toast.show(m, {
        //             duration: Toast.durations.LONG,
        //             textColor: "white",
        //             backgroundColor: APP_COLOR.BLUE,
        //             opacity: 1
        //         });

        //     }
        //     console.log(">>> check res: ", res.data)
        // } catch (error) {
        //     console.log(">>> check error: ", error)
        // }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.heading}>Registration</Text>
                <Text >Please enter your email to verify your account</Text>
                <ShareInput
                    title=""
                    keyboardType="email-address"
                    value={email}
                    setValue={setEmail}
                />
                <ShareButton
                    title="SEND"
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
            </View>
        </SafeAreaView>

    )
}

export default RegisPhonePage;