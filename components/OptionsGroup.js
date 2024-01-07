import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";

const getColor = (i, numItems) => {
    const multiplier = 255 / (numItems - 1);
    const colorVal = i * multiplier;
    return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

const mapIndexToData = (d, index, arr) => {
    const backgroundColor = getColor(index, arr.length);
    return {
        text: `${index}`,
        key: `key-${backgroundColor}`,
        backgroundColor,
    };
}

const NUM_ITEMS = 10;

const initialData = [...Array(NUM_ITEMS)].map(mapIndexToData);

export function OptionsGroup() {
    const [data, setData] = useState(initialData);

    const renderItem = ({ item, drag, isActive }) => {
        return (
            <ScaleDecorator>
                <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={drag}
                    disabled={isActive}
                    style={[
                        styles.rowItem,
                        { backgroundColor: isActive ? "red" : item.backgroundColor },
                    ]}
                >
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
            </ScaleDecorator>
        );
    };

    return (
        <View>
            <Text style={{ marginBottom: 8 }}>Options</Text>
            <DraggableFlatList
                data={data}
                onDragEnd={({ data }) => setData(data)}
                keyExtractor={(item) => item.key}
                renderItem={renderItem}
                height={400}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rowItem: {
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
});