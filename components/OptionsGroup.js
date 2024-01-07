import { StyleSheet, Text, View } from "react-native"
import DraggableFlatList from "react-native-draggable-flatlist"

export function OptionsGroup({ navigation }) {

    return (
        <View>
            <Text>Options</Text>
            {/* <DraggableFlatList /> */}
        </View>
    )
}

const inputBoxStyle = StyleSheet.create({
    input: {
        fontSize: 16,
        margin: 8,
        borderRadius: 8,
        padding: 12,
        paddingTop: 12,
        paddingBottom: 16,
        backgroundColor: 'white',
    }
})