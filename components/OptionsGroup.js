import "react-native-get-random-values";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";
import { v4 as uuidv4 } from "uuid";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from "react-native-gesture-handler";

export function OptionsGroup({ setHasOptions, setPollOptions }) {
    const [newOptionText, setNewOptionText] = useState("")
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length >= 2) {
            setHasOptions(true)
        }

        setPollOptions(data)
    }, [data])

    const handleAddOption = () => {
        // Handle adding options
        const newOption = newOptionText.trim();

        if (!newOption) return;

        // To generate unique key id
        const key = uuidv4();

        // To accumulate poll count 
        const optionCount = 3;

        // Add new option with the unique key generated
        setData((prevData) => {
            const newEntry = {
                key,
                newOption,
                optionCount
            };
            return [newEntry, ...prevData]
        })

        // Reset input field 
        setNewOptionText("")
    }

    const renderItem = ({ item, drag, isActive, getIndex }) => {
        const isLastItem = getIndex() === 9; // Do not render a bottom border it is the last item
        const [itemName, setItemName] = useState(item.newOption);

        return (
            <ScaleDecorator>
                <View style={{ marginTop: 12, marginLeft: 12, marginRight: 12, paddingBottom: 8, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: "#E4E7E5" }}>
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
        <View style={{ marginBottom: 20 }}>
            <Text style={{ marginBottom: 8 }}>Options</Text>
            <View style={{ backgroundColor: "white", borderRadius: 8 }}>
                <DraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => setData(data)}
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}
                    style={{ overflow: 'visible' }}
                />
                {data.length < 10 && <TextInput placeholder="Add option" onChangeText={value => setNewOptionText(value)} onSubmitEditing={handleAddOption} value={newOptionText} style={{ padding: 12 }} />}
            </View>
            {data.length < 10 && <Text style={{ marginTop: 8, color: '#8E938F' }}>You can add {10 - data.length} more options.</Text>}
        </View>
    );
}