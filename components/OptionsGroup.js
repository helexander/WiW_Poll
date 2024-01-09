import "react-native-get-random-values";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";
import { v4 as uuidv4 } from "uuid";
import { ListItem } from "react-native-design-system"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from "react-native-gesture-handler";

const initialTempData = [{
    key: 123,
    newOption: "Pasta"
}, {
    key: 124,
    newOption: "Pizza"
}, {
    key: 125,
    newOption: "Kebab"
},
];

export function OptionsGroup() {
    const [newOptionText, setNewOptionText] = useState("")
    const [tempData, setTempData] = useState(initialTempData);

    const handleAddOption = () => {
        // handle adding options
        const newOption = newOptionText.trim();

        if (!newOption) return;

        // To generate unique key id
        const key = uuidv4();

        // Add new option with the unique key generated
        setTempData((prevData) => {
            const newEntry = {
                key,
                newOption,
            };
            return [newEntry, ...prevData]
        })

        // Reset input field 
        setNewOptionText("")
    }

    const renderItem = ({ item, drag, isActive, getIndex }) => {
        const isFirstItem = getIndex() === 0;
        const isLastItem = getIndex() === 9; // Do not render a bottom border it is the last item
        const [itemName, setItemName] = useState(item.newOption);

        return (
            <ScaleDecorator>
                <View style={{ paddingBottom: 8, paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: !isLastItem && 1, borderBottomColor: "#E4E7E5" }}>
                    <TextInput value={itemName} onChangeText={value => setItemName(value)} placeholder="Option" maxLength={100} />
                    <TouchableOpacity
                        size="lg"
                        onLongPress={drag}
                        disabled={isActive}
                        background={isActive ? "gray300" : "white"}
                    >
                        <MaterialIcons name="drag-indicator" size={24} style={{ transform: [{ rotate: '90deg' }] }} />
                    </TouchableOpacity>
                </View>
            </ScaleDecorator>
        )
    }


    return (
        <View>
            <Text style={{ marginBottom: 8 }}>Options</Text>
            <View style={{ backgroundColor: "white", padding: 12, borderRadius: 8 }}>
                <DraggableFlatList
                    data={tempData}
                    onDragEnd={({ data }) => setTempData(data)}
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}
                    style={{ overflow: 'visible' }}
                />
                {tempData.length < 10 && <TextInput placeholder="Add option" onChangeText={value => setNewOptionText(value)} onSubmitEditing={handleAddOption} value={newOptionText} style={{ marginTop: 12 }} />}
            </View>
            {tempData.length < 10 && <Text style={{ paddingTop: 8, color: '#8E938F' }}>You can add {10 - tempData.length} more options.</Text>}
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