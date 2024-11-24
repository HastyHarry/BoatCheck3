import React from 'react';
import { Text, Button, Card, TextInput, Appbar } from 'react-native-paper';
import { View } from 'react-native';

import { useState, useEffect, useCallback } from 'react';

export default function SailBoatChecklist({ theme, styles }) {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const boatName = ''

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'auto', alignItems: 'auto' }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => handleOptionSelect(null)} />
                <Appbar.Content title="SailBoat" />
            </Appbar.Header>

            <Card style={styles.card}>
                <Card.Content>
                    <TextInput
                        label="Boat Name"
                        value={boatName}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <Button
                        mode="contained"
                        onPress={() => console.log('Button Pressed')}
                        style={styles.button}
                    >
                        Button
                    </Button>
                </Card.Content>
            </Card>
        </View>
    )

}