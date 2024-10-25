import { Text, View, StyleSheet, ImageBackground, Image } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { APP_COLOR } from "@/utils/constant";
import ShareButton from "@/components/button/share.button";
import bg from "@/assets/auth/welcome-background.png"
import { Link, Redirect, router } from "expo-router";
import TextBetweenLine from "@/components/button/text.between.line";
import fbLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    welcomeText: {
        flex: 0.6,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 20,
        top: 60
    },
    welcomeBtn: {
        flex: 0.4,
        gap: 30
    },
    heading: {
        fontSize: 60,
        fontWeight: "600",
        color: "#0068b7"
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.BLUE,
        marginVertical: 10,
    },
    footer: {

    },

    btnContainer: {

    },
    btnContent: {
        backgroundColor: "green",
        padding: 20,
        borderRadius: 10,
        alignSelf: "flex-start"
    },
    btnText: {
        textTransform: "uppercase"
    }
})

const WelcomePage = () => {

    if (true) {
        return (
            <Redirect href={"/(tabs)"} />
        )
    }

    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={bg}
        >
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#51576d']}
                locations={[0.2, 0.8]}

            >
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>
                            Welcome to
                        </Text>
                        <Text style={styles.body}>
                            Shop Food
                        </Text>
                    </View>
                    <View style={styles.welcomeBtn}>
                        <TextBetweenLine title="Login with" />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 30
                        }}>
                            <ShareButton
                                title="faceBook"
                                onPress={() => { alert("me") }}
                                textStyle={{ textTransform: "uppercase" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    backgroundColor: "#fff"
                                }}
                                icons={
                                    <Image source={fbLogo} />
                                }
                            />

                            <ShareButton
                                title="google"
                                onPress={() => { alert("me") }}
                                textStyle={{ textTransform: "uppercase" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    paddingHorizontal: 20,
                                    backgroundColor: "#fff"
                                }}
                                icons={
                                    <Image source={ggLogo} />}
                            />
                        </View>
                        <View>
                            <ShareButton
                                title="Login with email"
                                onPress={() => {
                                    router.navigate("/(auth)/login")
                                }}
                                textStyle={{ color: "#fff", paddingVertical: 5, }}
                                pressStyle={{ alignSelf: "stretch" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    backgroundColor: "#2c2c2c",
                                    paddingVertical: 10,
                                    marginHorizontal: 50,
                                    borderColor: "#505050",
                                    borderWidth: 1
                                }}

                            /></View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "center",
                            gap: 10,
                        }}>
                            <Text style={{
                                color: "white",
                            }}
                            >Do you have an account?
                            </Text>
                            <Link href={"/(auth)/signUp"}>
                                <Text style={{
                                    color: "white",
                                    textDecorationLine: "underline"
                                }}>Register.
                                </Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </LinearGradient>

        </ImageBackground>

    )
}

export default WelcomePage;