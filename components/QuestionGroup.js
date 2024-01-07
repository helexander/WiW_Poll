import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { OptionsGroup } from "./OptionsGroup"

export function QuestionGroup({ navigation }) {
    const [charCount, setCharCount] = useState("")

    return (
        <View style={{ margin: 24 }}>
            <View>
                <Text>Question</Text>
                <Text style={{ position: "absolute", right: 0, color: charCount.length <= 255 ? "green" : "red" }}>{charCount.length <= 255 ? charCount.length : 255 - charCount.length}</Text>
            </View>
            <TextInput style={inputBoxStyle.input} placeholder="Ask a question" multiline={true} onChangeText={value => setCharCount(value)} />
            <Button title="Go to Details" onPress={() => navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'some text'
            })} />
            <OptionsGroup />
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