import { Text, View, StyleSheet, ImageBackground, Image } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { APP_COLOR } from "@/utils/constant";
import ShareButton from "@/components/share.button";
import bg from "@/assets/auth/welcome-background.png"
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
        paddingLeft: 20
    },
    welcomeBtn: {
        flex: 0.4,
        gap: 20
    },
    heading: {
        fontSize: 40,
        fontWeight: "600",
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
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={bg}
        >
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F']}
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
                        <Text style={styles.footer}>
                            Nền tảng giao đồ ăn trực tuyến hàng đầu Việt Nam
                        </Text>
                    </View>
                    <View style={styles.welcomeBtn}>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'green',
                            marginHorizontal: 50,
                        }}>
                            <Text style={{
                                textAlign: "center",
                                padding: 10,
                                backgroundColor: "white",
                                alignSelf: "center",
                                position: 'relative',
                                top: 20,
                            }}>
                                Đăng nhập với
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 30
                        }}>
                            <ShareButton
                                title="Facebook"
                                onPress={() => { }}
                                textStyle={{ textTransform: "lowercase" }}
                                pressStyle={{ alignSelf: "stretch" }}
                                buttonStyle={{ justifyContent: "center", borderRadius: 30, backgroundColor: "#fff", }}
                                icon={
                                    <Image source={fbLogo} />
                                }
                            />
                            <ShareButton
                                title="Google"
                                onPress={() => { }}
                                textStyle={{ textTransform: "lowercase" }}
                                pressStyle={{ alignSelf: "stretch" }}
                                buttonStyle={{ justifyContent: "center", borderRadius: 30, backgroundColor: "#fff", paddingHorizontal: 20 }}
                                icon={
                                    <Image source={ggLogo} />
                                }
                            />
                        </View>
                        <View>
                            <ShareButton
                                title="Đăng nhập với email"
                                onPress={() => { }}
                                textStyle={{ color: "#fff", paddingVertical: 5, }}
                                pressStyle={{ alignSelf: "stretch" }}
                                buttonStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    backgroundColor: "#2c2c2c",
                                    paddingVertical: 10,
                                    marginHorizontal: 50
                                }}

                            /></View>
                        <View>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                }}
                            >Chưa có tài khoản? Đăng ký.</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

        </ImageBackground>

    )
}

export default WelcomePage;