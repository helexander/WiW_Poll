import { Button, Text, View } from "react-native";

export function DetailsScreen({ navigation, route }) {
    const { itemId, otherParam } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>Item ID: {JSON.stringify(itemId)}</Text>
            <Text>Param: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details', {
                    itemId: Math.floor(Math.random() * 100),
                })}

            // Adds a new Details to the Stack
            // onPress={() => navigation.push('Details')}
            />

            {/* Navigates user back to the first screen in the stack */}
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}