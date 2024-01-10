import { Button, View } from "react-native"
import { OptionsGroup } from "./OptionsGroup"
import { MultipleAnswersSwitch } from "./MultipleAnswers"
import { QuestionGroup } from "./QuestionGroup"
import { useEffect, useState } from "react"

export function PollScreen({ navigation }) {
    const [question, setQuestion] = useState('')
    const [pollOptions, setPollOptions] = useState({})
    const [hasQuestion, setHasQuestion] = useState(false)
    const [hasOptions, setHasOptions] = useState(false)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('Poll', {
                        pollQuestion: question,
                        pollOptions: pollOptions
                    })}
                    title="Send"
                    color='#617A67'
                    disabled={!hasQuestion || !hasOptions ? true : false}
                />
            )
        })
    }, [navigation, question, hasQuestion, hasOptions])


    return (
        <View style={{ margin: 24 }}>
            <QuestionGroup setQuestion={setQuestion} setHasQuestion={setHasQuestion} />
            <OptionsGroup setPollOptions={setPollOptions} setHasOptions={setHasOptions} />
            <MultipleAnswersSwitch />
        </View>
    )
}