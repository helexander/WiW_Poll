import "react-native-get-random-values";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";
import { v4 as uuidv4 } from "uuid";
import { ListItem } from "react-native-design-system"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const initialTempData = [{
    key: 123,
    newOption: "Pasta"
}, {
    key: 124,
    newOption: "Pizza"
}, {
    key: 125,
    newOption: "Kebabs"
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
        console.log(tempData.length)
        setOptionCount(optionCount + 1)
    }

    const renderItem = ({ item, drag, isActive, getIndex }) => {
        const isLastItem = getIndex() === 9; // Do not render a bottom border it is the last item

        return (
            <ScaleDecorator>
                {/* TODO: Options should be renamable */}
                {/* TODO: Users should only be able to drag and drop when the icon is clicked */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: !isLastItem && 1, borderBottomColor: "#E4E7E5" }}>
                    <Text>{item.newOption}</Text>
                    <ListItem
                        size="lg"
                        onLongPress={drag}
                        disabled={isActive}
                        background={isActive ? "gray300" : "white"}
                    >
                        <MaterialIcons name="drag-indicator" size={16} />
                    </ListItem>
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
                    height={400}
                />
                {tempData.length < 10 && <TextInput placeholder="Add option" onChangeText={value => setNewOptionText(value)} onSubmitEditing={handleAddOption} />}
            </View>
            {tempData.length < 10 && <Text>You can add {10 - tempData.length} more options.</Text>}
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