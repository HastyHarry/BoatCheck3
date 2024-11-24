
import React from 'react';
import { Text, Button, Card, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { styles } from '../styles'

import SailBoatChecklist from '../screens/checklists/sailboat'

export default function HomeScreen({ theme }) {

  // const SailBoatChecklistWithTheme = (props) => <SailBoatChecklist {...props} theme={theme} style={styles} />;

  const [selectedOption, setSelectedOption] = useState(null);
  console.log('Selected option',selectedOption)
  const [inputs, setInputs] = useState({
    boatName: '',
    year: '',
    inspectionDate: '',
    notes: '',
    additionalField1: '',
    additionalField2: '',
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (name, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'auto', alignItems: 'auto' }}>
      <Text>Home Screen</Text>

      {selectedOption === null ? (
        <View>
          <Text variant="headlineLarge" style={styles.title}>
            Select an Option
          </Text>
          <Button mode="contained" onPress={() => handleOptionSelect('SailBoat')} style={styles.button}>
            SailBoat
          </Button>
          <Button mode="contained" onPress={() => handleOptionSelect('Catamaran')} style={styles.button}>
            Catamaran
          </Button>
        </View>
      ) : selectedOption === "SailBoat" ? <SailBoatChecklist theme={theme} styles={styles} /> : (<View></View>)}
    </View>
  );
}