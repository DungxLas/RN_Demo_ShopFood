import { View, Image } from "react-native";
import ShareButton from "./share.button";
import TextBetweenLine from "./text.between.line";
import fbLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';

const SocialButton = () => {
    return (
        <View style={{ gap: 30 }}>
            <TextBetweenLine title="Login with" textColor="black" />
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
                    btnStyle={{ justifyContent: "center", borderRadius: 30, backgroundColor: "#fff", }}
                    icons={
                        <Image source={fbLogo} />
                    }
                />
                <ShareButton
                    title="Google"
                    onPress={() => { }}
                    textStyle={{ textTransform: "lowercase" }}
                    pressStyle={{ alignSelf: "stretch" }}
                    btnStyle={{ justifyContent: "center", borderRadius: 30, backgroundColor: "#fff", paddingHorizontal: 20 }}
                    icons={
                        <Image source={ggLogo} />
                    }
                />
            </View>
        </View>
    )
}

export default SocialButton;