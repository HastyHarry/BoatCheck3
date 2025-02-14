import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NaviCard({ title, icon, onPress, theme, cardWidth }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={[styles.card, { width: cardWidth, backgroundColor: theme.colors.surfaceVariant }]}>
        <Card.Content style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons
            name={icon}
            size={50}
            color={theme.colors.primary}
            style={styles.cardIcon}
          />
          <Text variant="titleLarge" style={[styles.cardText, { color: theme.colors.primary }]}>
            {title}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )
}

// Стили для карточки
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'light',
  },
});
