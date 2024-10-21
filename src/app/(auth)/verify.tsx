import LoadingOverlay from "@/components/loading/overlay";
import { resendCodeAPI, verifyCodeAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native"
import OTPTextView from 'react-native-otp-textinput';
import Toast from "react-native-root-toast";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 20
    }
})

const VerifyPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const otpRef = useRef<OTPTextView>(null);
    const [code, setCode] = useState<string>("");

    const { email } = useLocalSearchParams();

    const verifyCode = async () => {
        //call api
        Keyboard.dismiss();
        setIsSubmit(true);
        const res = await verifyCodeAPI(email as string, code);
        setIsSubmit(false);

        //clear input

        if (res.data) {
            //success
            otpRef?.current?.clear();
            Toast.show("Verify account success", {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.BLUE,
                opacity: 1
            });
            router.replace("/(auth)/login")

        } else {
            Toast.show(res.message as string, {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1
            });
        }
    }

    useEffect(() => {
        if (code && code.length === 6) {
            verifyCode()
        }
    }, [code])

    const handleResendCode = async () => {
        otpRef?.current?.clear();

        const res = await resendCodeAPI(email as string);
        const m = res.data ? "Resend success" : res.message
        Toast.show(m as string, {
            duration: Toast.durations.LONG,
            textColor: "white",
            backgroundColor: APP_COLOR.BLUE,
            opacity: 1
        });
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}> Verify account</Text>
                <Text style={{ marginVertical: 10 }}>Please enter the confirmation code sent to hoidanit@gmail.com</Text>
                <View style={{ marginVertical: 20 }}>
                    <OTPTextView
                        ref={otpRef}
                        handleTextChange={setCode}
                        autoFocus
                        inputCount={6}
                        inputCellLength={1}
                        tintColor={APP_COLOR.BLUE}
                        textInputStyle={{
                            borderWidth: 1,
                            borderColor: APP_COLOR.GREY,
                            borderBottomWidth: 1,
                            borderRadius: 5,
                            // @ts-ignore:next-line
                            color: APP_COLOR.ORANGE
                        }}
                    />
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                    <Text >Did not receive confirmation code,</Text>
                    <Text
                        onPress={handleResendCode}
                        style={{ textDecorationLine: 'underline' }}
                    > send back</Text>
                </View>
            </View>
            {isSubmit && <LoadingOverlay />}
        </>
    )
}

export default VerifyPage;
