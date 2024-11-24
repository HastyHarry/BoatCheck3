import * as React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

export default function InspectScreen({theme}) {

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inspections</Text>
    </View>
  );
}