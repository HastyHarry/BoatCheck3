import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles';

export default function HomeScreen({ navigation, theme }) {
  // Determine screen width and decide on the card width.
  const screenWidth = Dimensions.get('window').width;
  const isLargeScreen = screenWidth >= 600;  // When screen is large, use two columns
  const cardWidth = isLargeScreen ? (screenWidth / 2) - 32 : screenWidth - 32;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',  // Align cards to the left
          alignItems: 'flex-start', // Align cards to the top
          paddingVertical: 16,
          flex: 1,
        },
      ]}
    >
      <Text
        variant="headlineLarge"
        style={[styles.title, { color: theme.colors.primary, width: '100%', textAlign: 'center' }]}
      >
        Select an Option
      </Text>

      {/* Check Sailboat Card */}
      <TouchableOpacity onPress={() => navigation.navigate('SailboatStep1')}>
        <Card
          style={[
            styles.card,
            {
              width: cardWidth,
              backgroundColor: theme.colors.surface,
              marginRight: 16  // Add margin between cards in large screen
            },
          ]}
        >
          <Card.Content style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="sail-boat"
              size={50}
              color={theme.colors.primary}
              style={{ marginBottom: 10 }}
            />
            <Text variant="titleLarge" style={{ color: theme.colors.onSurface }}>
              Check Sailboat
            </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      {/* Check Catamaran Card */}
      <TouchableOpacity onPress={() => navigation.navigate('CatamaranCheck')}>
        <Card
          style={[
            styles.card,
            {
              width: cardWidth,
              backgroundColor: theme.colors.surface,
              marginRight: 16,  // Add margin between cards in large screen
            },
          ]}
        >
          <Card.Content style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="ferry" // Icon for catamaran
              size={50}
              color={theme.colors.primary}
              style={{ marginBottom: 10 }}
            />
            <Text variant="titleLarge" style={{ color: theme.colors.onSurface }}>
              Check Catamaran
            </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      {/* Inspection History Card */}
      <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <Card
          style={[
            styles.card,
            {
              width: cardWidth,
              backgroundColor: theme.colors.surface,
            },
          ]}
        >
          <Card.Content style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="history"
              size={50}
              color={theme.colors.primary}
              style={{ marginBottom: 10 }}
            />
            <Text variant="titleLarge" style={{ color: theme.colors.onSurface }}>
              Inspection History
            </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
