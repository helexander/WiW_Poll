import { useState } from "react";
import { Switch, Text, View } from "react-native";

export function MultipleAnswersSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ padding: 8, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 8 }}>
            <Text>Multiple answers</Text>
            <Switch trackColor={{ false: '#8E938F', true: '#7D9A84' }}
                ios_backgroundColor="#8E938F"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scale: .75 }] }} />
        </View>
    )
}