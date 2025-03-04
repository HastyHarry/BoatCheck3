import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NaviCard({ title, onPress, theme, cardWidth }) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Card style={[localStyles.card, { width: cardWidth, backgroundColor: theme.colors.surface }]}>
          <Card.Content style={localStyles.cardContent}>
          <Text style={[localStyles.label, { color: theme?.colors?.onSurface || '#000' }]}>{title}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }

// Стили для карточки
import { StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
    card: {
        marginBottom: 12,
        borderRadius: 12,
        elevation: 2, // For Android shadow
      },
      content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      label: {
        fontSize: 16,
      },
  });
