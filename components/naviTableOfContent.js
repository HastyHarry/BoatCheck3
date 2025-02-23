import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NaviTableOfContent({ title, subTitle, onPress, theme, cardWidth }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={[localStyles.card, { width: cardWidth, backgroundColor: theme.colors.surface }]}>
        <Card.Content style={localStyles.cardContent}>
          <Text variant = 'titleLarge' style={[localStyles.cardTextTitle, { color: theme.colors.primary }]}>
            {title}
          </Text>
          <Text variant = 'displayMedium' style={[localStyles.cardTextSubTitle, { color: theme.colors.primary }]}>
            {subTitle}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )
}

// Стили для карточки
import {StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  card: {
    marginVertical: 8,
    height: 80,
    borderRadius: 12,
    // padding: 1,
    // paddingHorizontal: 12,
    // paddingVertical: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cardContent:{
    flex: 1,
    // padding:10,
    justifyContent: 'center',
    alignItems: 'flex-start', // Центрирует текст по вертикали
    paddingHorizontal: 12, // Отступы по бокам для красоты
  },
  cardTextTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardTextSubTitle: {
    fontSize: 14,
    fontWeight: '300',
  },
});
