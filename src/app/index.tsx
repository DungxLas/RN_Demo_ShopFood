import { Text, View, StyleSheet, ImageBackground } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { APP_COLOR } from "@/utils/constant";
import ShareButton from "@/components/share.button";
import bg from "@/assets/auth/welcome-background.png"
import { Link, Redirect } from "expo-router";
import SocialButton from "@/components/button/social.button";


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
            <Redirect href={"/(auth)/regisPhone"} />
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
                        <SocialButton />
                        <View>
                            <ShareButton
                                title="Login with email"
                                onPress={() => { }}
                                textStyle={{ color: "#fff", paddingVertical: 5, }}
                                pressStyle={{ alignSelf: "stretch" }}
                                buttonStyle={{
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