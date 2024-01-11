import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react"

export function QuestionGroup({ setQuestion, setHasQuestion }) {
    const [questionField, setQuestionField] = useState("")

    if (questionField === "") {
        setHasQuestion(false)
    }

    return (
        <View style={{ marginBottom: 12 }}>
            <View>
                <Text>Question</Text>
                <Text style={{ position: "absolute", right: 0, color: questionField.length <= 255 ? "green" : "red" }}>{questionField.length <= 255 ? questionField.length : 255 - questionField.length}</Text>
            </View>
            <TextInput style={inputBoxStyle.input} placeholder="Ask a question" multiline={true} onChangeText={value => {
                setHasQuestion(true)

                // Trim out whitespaces
                setQuestionField(value.replace(/\s/g, ''))
                setQuestion(value)
            }} />
        </View>
    )
}

const inputBoxStyle = StyleSheet.create({
    input: {
        fontSize: 16,
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 12,
        paddingTop: 12,
        paddingBottom: 16,
        paddingLeft: 12,
        backgroundColor: 'white',
    }
})