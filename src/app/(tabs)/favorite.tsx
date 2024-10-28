
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoritePage = () => {

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View style={{ padding: 10 }}>
                <Text> Favorite page</Text>
                <Text> Nội dung này sẽ làm trong khóa React Native Advance</Text>
            </View>

        </SafeAreaView>
    )
}

export default FavoritePage;