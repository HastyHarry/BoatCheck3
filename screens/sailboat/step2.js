import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import PhotoPicker from '../../components/photoPicker2';
import { createStyles } from '../../styles';


export default function Step2({ navigation, theme }) {

  const styles = createStyles(theme);

  return (
    <ScrollView >
      <View style={styles.checkListContainer}>


      </View>
    </ScrollView>
  );
}

