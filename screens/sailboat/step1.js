import React from 'react';
import { View, Button, TouchableOpacity, Dimensions} from 'react-native';
import { Card, Text } from 'react-native-paper';
import { styles, createStyles } from '../../styles';


export default function Step1({ navigation, theme}) {

    const screenWidth = Dimensions.get('window').width;
    const isLargeScreen = screenWidth >= 600;  // When screen is large, use two columns
    const cardWidth = isLargeScreen ? (screenWidth / 2) - 32 : screenWidth - 32;


    const styles = createStyles(theme);
    // const style = styles(theme)

    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Internal Checks: Salon, Cabins, etc.</Text>

            <TouchableOpacity onPress={() => navigation.navigate('SailboatStep2')}>
                <Card
                    style={[
                        styles.card,
                        {
                            width: cardWidth,
                            // backgroundColor: theme.colors.surface,
                            marginRight: 16  // Add margin between cards in large screen
                        },
                    ]}
                >
                    <Card.Content style={{ alignItems: 'center' }}>
                        <Text variant="titleLarge" style={{ color: theme.colors.onSurface }}>
                            Next
                        </Text>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SailboatStep2')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}