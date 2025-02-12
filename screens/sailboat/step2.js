import React from 'react';
import { View, Text, Button } from 'react-native';



export default function Step2({ navigation }) {
  return (
    <View>
      <Text>External Checks: Mast, Cockpit, etc.</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}