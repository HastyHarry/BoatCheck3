import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import PhotoPicker from '../../components/photoPicker';
import { createStyles } from '../../styles';



export default function Step2({ navigation, theme }) {

  const styles = createStyles(theme);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.checkListContainer}>
        {/* <Text>External Checks: Mast, Cockpit, etc.</Text> */}
        <PhotoPicker onImageSelected={(imageUri) => console.log("Selected Image:", imageUri)} theme={theme} />

        <Button mode="contained" onPress={() => navigation.goBack()}
          buttonColor={theme.colors.secondary}
          textColor={theme.colors.onSecondary}
          style={[{ borderRadius: 5 }, { marginTop: 8 }]}>
          Back
        </Button >

      </View>
    </ScrollView>
  );
}

