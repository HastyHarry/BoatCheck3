import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
// Стили для карточки
import { StyleSheet } from 'react-native';
// import { View } from 'react-native-web';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NaviTableOfContent({ title, subTitle, onPress, theme, cardWidth, onLongPress}) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      onLongPress={onLongPress}>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}> */}
      <Card style={[localStyles.card, { width: cardWidth, backgroundColor: theme.colors.surface }]}>
        <Card.Content 
        // style={localStyles.cardContent}
        >
          <View style={{ 
              flex:1,
              alignItems: 'flex-start', 
              justifyContent: 'center', 
              margin: 0, 
              padding: 0 
            }}>
            <Text variant='titleLarge' style={[localStyles.cardTextTitle, { color: theme.colors.primary }]}>
              {title}
            </Text>
            <Text variant='displayMedium' style={[localStyles.cardTextSubTitle, { color: theme.colors.primary }]}>
              {subTitle}
            </Text>
          </View>
        </Card.Content>
      </Card>
      {/* </View> */}
    </TouchableOpacity>
  )
}


const localStyles = StyleSheet.create({
  card: {
    marginVertical: 8,
    height: 80,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cardContent: {
    flex: 1,
    // paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardTextTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardTextSubTitle: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 24
  },
});
