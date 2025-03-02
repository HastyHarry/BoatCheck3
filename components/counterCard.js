import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';

export default function CounterCard({ title, theme, cardWidth, initialCount = 0, value, onValueChange, style = {} }) {

  const increase = () => {
    onValueChange(value + 1)
  }
  const decrease = () => onValueChange((value > 0 ? value - 1 : 0)); // Предотвращает отрицательные значения

  return (
    <Card style={[localStyles.card, { width: cardWidth, backgroundColor: theme.colors.surface}, style]}>
      <Card.Content style={localStyles.cardContent}>
        <Text style={[localStyles.label, { color: theme?.colors?.onSurfaceVariant || '#000' }]}>{title}</Text>
        <View style={localStyles.counterContainer}>
          <IconButton icon="minus" size={24} onPress={decrease} iconColor={theme.colors.primary} />
          <Text style={[localStyles.countText, { color: theme.colors.primary }]}>{value}</Text>
          <IconButton icon="plus" size={24} onPress={increase} iconColor={theme.colors.primary} />
        </View>
      </Card.Content>
    </Card>
  );
}

// Стили
import { StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  card: {
    padding: 0,
    marginTop: 6,
    borderRadius: 12,
    elevation: 2, // Тень для Android
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 0,
    paddingEnd: 0
  },
  label: {
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0
  },
  countText: {
    fontSize: 18,
    marginHorizontal: 8,
    minWidth: 30,
    textAlign: 'center',
  },
});
