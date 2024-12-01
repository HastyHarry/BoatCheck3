import React from 'react';
import { Text, Button, Card, TextInput, Appbar } from 'react-native-paper';
import { View } from 'react-native';

import { useState, useEffect, useCallback } from 'react';
import { handleSave } from '../../utils/context'

export default function SailBoatChecklist({ theme, styles }) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [checklistScreen, setChecklistScreen] = useState(null);

    const [inputData, setInputData] = useState({ boatName: "" })
    console.log("input", inputData)

    useEffect(() => {
        handleSave('TestKey', inputData)
        console.log('saving Data')
    }, [inputData]);

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'auto', alignItems: 'auto' }}>
            {/* <Appbar.Header>
                <Appbar.BackAction onPress={() => handleOptionSelect(null)} />
                <Appbar.Content title="SailBoat" />
            </Appbar.Header> */}

            <Card style={styles.card}>
                <Card.Content>
                    <TextInput
                        label="Boat Name"
                        value={inputData?.boatName}
                        onChangeText={text => setInputData({ "boatName": text })}
                        mode="outlined"
                        style={styles.input}
                    />
                    <Button
                        mode="contained"
                        onPress={() => {
                            console.log('Button Pressed')
                            // handleSave("blahblah")
                        }
                        }
                        style={styles.button}
                        buttonColor={theme.colors.primaryContainer}
                        textColor={theme.colors.primary}
                    >
                        Button
                    </Button>
                </Card.Content>
            </Card>
        </View>
    )
}