import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { createStyles } from '../../styles';
import CustomTextInput from '../../components/textInput'
import DateInput from '../../components/dateInput';
import CheckboxItem from '../../components/checkboxItem';
import NaviCard from '../../components/naviCard';
import CounterCard from '../../components/counterCard'
import PhotoPicker from '../../components/photoPicker2';

import { useGlobalState } from '../../utils/appContext';

export default function Step1({ navigation, theme }) {


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);


    let source = useGlobalState();
    const { updateField, updateMultiple} = source
    const {nameObj, emailObj, fendersObj, dateObj} = source.state
    // const handleSubmit = (fieldName, value) => {
    //     // updateField(fieldName, value)

    console.log('handle Submit', source)
    console.log('state',nameObj, emailObj, fendersObj, dateObj)

    const checkEmail = (string) => !(string.includes("@") && string.includes("."))


    return (
        <View style={[localStyles.checkListContainer, { backgroundColor: theme.colors.background, padding: 16}]}>

            <CustomTextInput
                label="Name"
                value={nameObj?.value}
                onChangeText={val => updateField("nameObj", {value:val})}
                theme={theme}
                placeholder="Enter your name"
            />

            <CustomTextInput
                label="Email"
                value={emailObj?.value}
                onChangeText={val => updateField("emailObj", {value:val, error: checkEmail(val)})}
                theme={theme}
                placeholder="Enter your email"
                error={emailObj?.error}
            />
            {/* <CustomTextInput
                label="Email2"
                value={email}
                onChangeText={val => updateField("email2", val)}
                theme={theme}
                placeholder="Enter your email"
                error={error}
            /> */}

            <CounterCard title="Fenders qty?" theme={theme} cardWidth={theme.cardWidth} initialCount={1} />
            <CounterCard title="Fenders qty?" theme={theme} cardWidth={theme.cardWidth} initialCount={1} />

            <CheckboxItem label='test checkbox' theme={theme}></CheckboxItem>
            <CheckboxItem label='test checkbox' theme={theme}></CheckboxItem>

            <DateInput label="Select Date" value={dateObj?.value} onChange={val => updateField("dateObj", {value:val})} />
            <DateInput label="Select Date2" value={dateObj?.value} onChange={val => updateField("dateObj", {value:val})} /> 

            {/* <NaviCard
                title="Internal Damages"
                onPress={() => navigation.navigate('SailboatStep2')}
                theme={theme}
                cardWidth={theme.cardWidth}> </NaviCard> */}

            <PhotoPicker title = "Internal Damages" onImageSelected={(imageUri) => console.log("Selected Image:", imageUri)} theme={theme}></PhotoPicker>

            {/* <Button mode="contained" onPress={() => navigation.navigate('SailboatStep0')}
                buttonColor = {theme.colors.secondary}
                textColor = {theme.colors.onSecondary}
                style = {[{borderRadius: 5}, {marginTop: 8}]}>
                
                Save
            </Button > */}
        </View>
    );
}


const localStyles = StyleSheet.create({
    checkListContainer:{
        flex: 1,
        justifyContent: 'flex-start',
    }
  });