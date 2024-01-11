import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export function MultipleAnswersSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16 }}>Multiple answers</Text>
            <Switch trackColor={{ false: '#8E938F', true: '#7D9A84' }}
                ios_backgroundColor="#8E938F"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scale: .8 }] }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        alignItems: "center"
    }
})