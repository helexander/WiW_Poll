import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

export function PollDetailsScreen({ route }) {
    const { pollQuestion, pollOptions } = route.params;

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    pollOptions.map(option => {
                        if (option.key === item.key) {
                            option.optionCount + 1
                        }
                    })
                }}
                style={{ paddingTop: 32 }}
            >
                <View style={styles.item}>
                    <Text style={{ fontSize: 20 }}>{item.newOption}</Text>
                    <Text>{item.optionCount} vote{item.optionCount > 1 ? 's' : ''}  <FontAwesome name="check-circle" size={24} color="#617A67" /></Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>{pollQuestion}</Text>
            <SafeAreaView>
                <FlatList
                    data={pollOptions}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    extraData={pollOptions} />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 24,
        fontSize: 24
    },
    item: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});