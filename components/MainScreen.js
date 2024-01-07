import { Button, Text, View } from "react-native";

export function MainScreen({ navigation }) {
    return (
        <View>
            <Text>Welcome to the Poll Bank</Text>
            <Button title=" Create a new poll" onPress={() => navigation.navigate('NewPoll')} />
        </View>
    )
}