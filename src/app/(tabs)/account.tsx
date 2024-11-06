import { useCurrentApp } from "@/context/app.context";
import { getURLBaseBackend } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";

interface IMiniPressProps {
    iconLabel: React.ReactNode;
    label: string;
    onPress?: any | null
}

const AccountPage = () => {
    const { appState } = useCurrentApp();
    const baseImage = `${getURLBaseBackend()}/images/avatar`;
    const insets = useSafeAreaInsets();

    function MiniPress(props: IMiniPressProps) {
        const { iconLabel, label, onPress } = props;
        return <Pressable
            onPress={onPress}
            style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderBottomColor: "#eee",
                borderBottomWidth: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center"
            }}>
            <View style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center"
            }}>
                {iconLabel}
                <Text>{label}</Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="grey" />
        </Pressable>;
    }

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    paddingTop: insets.top,
                    paddingHorizontal: 20,
                    paddingBottom: 20,
                    backgroundColor: APP_COLOR.BLUE,
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center"

                }}
            >
                <Image
                    style={{ height: 60, width: 60 }}
                    source={{ uri: `${baseImage}/${appState?.user.avatar}` }}
                />
                <View>
                    <Text style={{ color: "white", fontSize: 20 }}>
                        {appState?.user.name}
                    </Text>
                </View>
            </View>
            <MiniPress
                iconLabel={<Feather name="user-check" size={20} color="green" />}
                label="Update info"
                onPress={() => router.navigate("/(user)/account/info")}
            />
            <MiniPress
                iconLabel={<MaterialIcons name="password" size={20} color="green" />}
                label="Change password"
            />
            <MiniPress
                iconLabel={<MaterialIcons name="language" size={20} color="green" />}
                label="Language"
            />
            <MiniPress
                iconLabel={<MaterialIcons name="info-outline" size={20} color="green" />}
                label="About app"
            />
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                gap: 10,
                paddingBottom: 15
            }}>
                <Pressable
                    style={({ pressed }) => ({
                        opacity: pressed === true ? 0.5 : 1,
                        padding: 10,
                        marginHorizontal: 10,
                        backgroundColor: APP_COLOR.BLUE,
                        borderRadius: 3
                    })}>
                    <Text style={{
                        textAlign: "center",
                        color: "white"
                    }}>
                        Log Out
                    </Text>
                </Pressable>
                <Text style={{ textAlign: "center", color: APP_COLOR.GREY }}>
                    Version 1.0 - xxx
                </Text>
            </View>
        </View>
    )
}

export default AccountPage;