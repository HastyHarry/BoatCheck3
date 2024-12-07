
import React from 'react';
import { Text, Button, Card, TextInput, Appbar } from 'react-native-paper';
import { View } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { styles } from '../styles'

import SailBoatChecklist from '../screens/checklists/sailboat'

import {handleSave} from '../utils/context'

export default function HomeScreen({ theme, setCurrentInspection, currentInspectionData}) {

  // const [checklistScreen, setChecklistScreen] = useState(null);
  // const [currentInspectionData, setCurrentInspection] = useState({inspectionType: null})

  const {inspectionType} = currentInspectionData

  console.log('currentInspectionData', currentInspectionData)

  const [inputData, setInput] = useState({boatName:""})

  console.log('inputData homescreen', inputData)

  // useEffect(() => {
  //   handleSave('TestKey',inputData)
  //   console.log('saving Data')
  // }, [JSON.stringify(inputData)]); 

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };

  // const handleInputChange = (name, value) => {
  //   setInputs((prevInputs) => ({
  //     ...prevInputs,
  //     [name]: value,
  //   }));
  // };

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'auto', alignItems: 'auto' }}>
      {/* <Text>Home Screen</Text> */}
      {inspectionType !== null ? (
      <Appbar.Header>
        <Appbar.BackAction onPress={() => setCurrentInspection({inspectionType: null})} />
        <Appbar.Content title="Checklist Selection" />
      </Appbar.Header>) : (<View></View>)}

      {inspectionType === null ? (
        <View>
          <Text variant="headlineLarge" style={styles.title} textColor = {theme.colors.primary} >
            Select an Option
          </Text>
          <Button mode="contained" onPress={() => setCurrentInspection({inspectionType: 'SailBoat'})} 
            style={styles.button} buttonColor = {theme.colors.primaryContainer} textColor = {theme.colors.primary}>
            SailBoat
          </Button>
          <Button mode="contained" onPress={() =>  setCurrentInspection({inspectionType: 'Catamaran'})}
            style={styles.button} buttonColor = {theme.colors.primaryContainer} textColor = {theme.colors.primary}>
            Catamaran
          </Button>
        </View>
      ) : inspectionType === "SailBoat" ? <SailBoatChecklist theme={theme} styles={styles} /> : (<View></View>)}
    </View>
  );
}