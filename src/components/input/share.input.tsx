import { APP_COLOR } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardTypeOptions } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    inputGroup: {
        padding: 5,
        gap: 10
    },

    text: {
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 10,
    }
})

interface IProps {
    title?: string;
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    value: any;
    onChangeText?: any;
    onBlur?: any;
    error?: any;
}
const ShareInput = (props: IProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const [isShowPassword, setIsShowPassword] = useState<boolean>()

    useEffect(() => {
        setIsShowPassword(secureTextEntry)
    }, [])

    const {
        title,
        keyboardType,
        secureTextEntry = false,
        value,
        //setValue,
        onChangeText,
        onBlur,
        error
    } = props;

    return (
        <View style={styles.inputGroup}>
            {title && <Text style={styles.text}>{title}</Text>}
            <View>
                <TextInput
                    value={value}
                    //onChangeText={(text) => setValue(text)}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocus(true)}
                    onBlur={(e) => {
                        if (onBlur) {
                            onBlur(e);
                        }
                        setIsFocus(false);
                    }}
                    keyboardType={keyboardType}
                    style={[styles.input,
                    { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY }
                    ]}
                    secureTextEntry={isShowPassword && secureTextEntry}
                />
                {secureTextEntry
                    ? <FontAwesome5
                        name={!isShowPassword ? "eye" : "eye-slash"} size={24}
                        color="black"
                        style={{ position: "absolute", right: 15, bottom: 15 }}
                        onPress={() => { setIsShowPassword(!isShowPassword) }}
                    /> : <></>}
            </View>
            {error && <Text style={{ color: "red" }}>{error}</Text>}
        </View>
    )
}

export default ShareInput;