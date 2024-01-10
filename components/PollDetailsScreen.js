import { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.title, { color: textColor }]}>{item.newOption}</Text>
            <Text>{item.optionCount} vote{item.optionCount > 1 ? 's' : ''}  <FontAwesome name="check-circle" size={24} color="#617A67" /></Text>
        </View>
    </TouchableOpacity>
);

export function PollDetailsScreen({ navigation, route }) {
    const { pollQuestion, pollOptions } = route.params;
    const [selectedId, setSelectedId] = useState('');

    const renderItem = ({ item }) => {
        const backgroundColor = item.key === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.key === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.key)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    }

    return (
        <View>
            <Text>{pollQuestion}</Text>
            <SafeAreaView>
                <FlatList
                    data={pollOptions}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    extraData={selectedId} />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});