import React from 'react';
import { Text, Button, Card, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { useState, useEffect, useCallback } from 'react';

export default function SailBoatChecklist({ theme, styles }) {

    const boatName = ''

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>SailBoat</Text>

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