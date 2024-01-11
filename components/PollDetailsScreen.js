import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

export function PollDetailsScreen({ route }) {
    const { pollQuestion, pollOptions } = route.params;
    const [pollOptionState, setPollOptionState] = useState(pollOptions)

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setPollOptionState(prevOption => prevOption.map(
                        opt => {
                            if (opt.key === item.key) {
                                return {
                                    ...opt,
                                    optionCount: opt.optionCount + 1
                                }
                            }
                            return opt;
                        }
                    ))
                }}
                style={{ paddingTop: 32 }}
            >
                <View style={styles.item}>
                    <Text style={{ fontSize: 20 }}>{item.newOption}</Text>
                    <Text>{item.optionCount} vote{item.optionCount > 1 ? 's' : ''}  {(index === 0 && item.optionCount !== 0) && <FontAwesome name="check-circle" size={24} color="#617A67" />}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>{pollQuestion}</Text>
            {pollOptionState.map(option => {
                <Text>{option.optionCount}</Text>
            })}
            <SafeAreaView>
                <FlatList
                    data={pollOptionState.sort((a, b) => b.optionCount - a.optionCount)}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    extraData={pollOptionState} />
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