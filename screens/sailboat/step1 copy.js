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

const parseSheet = ({sheet, theme, source, updateField, checkEmail}) => {
    const { items } = sheet;
    return items.map(item => {
        switch (item.type) {
            case 'textInput':
                return <CustomTextInput
                label={item.label}
                value={source.state[item.objectName]?.value}
                onChangeText={val => updateField(item.objectName, { value: val })}
                theme={theme}
                placeholder={item.placeholder}
                style={localStyles.gap}
                 />
            case 'textInputEmail':
                return <CustomTextInput
                label={item.label}
                value={source.state[item.objectName]?.value}
                onChangeText={val => updateField(item.objectName, { value: val, error: checkEmail(val) })}
                theme={theme}
                placeholder={item.placeholder}
                error={source.state[item.objectName]?.error}
                style={localStyles.gap}
            />
            // case 'counterInput':
            //     return <CounterCard title={item.label} />
            // case 'checkbox':
            //     return <CheckboxItem label={item.label} />
            // case 'dateInput':
            //     return <DateInput label={item.label} />
            // case 'photoPicker':
            //     return <PhotoPicker title={item.title} />
            // default:
            //     return <Text>Unknown item type</Text>
        }
    })
}

export default function Step1({ navigation, theme }) {

    
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);


    let source = useGlobalState();
    const { updateField, updateMultiple } = source
    const { nameObj, emailObj, fendersObj, dateObj, checkboxObj, photosObj } = source.state
    
    const ParsedSheet = parseSheet({sheet:sheetStructure, theme, source, updateField, checkEmail})
    console.log('parsed sheet', ParsedSheet)
    // const handleSubmit = (fieldName, value) => {
    //     // updateField(fieldName, value)

    // console.log('handle Submit', source)
    // console.log('state', nameObj, emailObj, fendersObj, dateObj)

    const checkEmail = (string) => !(string.includes("@") && string.includes("."))

    const checkBoxHandler = (checked) => {
        console.log('checkbox handler', checked)
    }
    const counterHandler = (value) => {
        console.log('counterHandler', { value })
    }


    return (
        <View style={[localStyles.checkListContainer, { backgroundColor: theme.colors.background, padding: 16 }]}>
            <ParsedSheet></ParsedSheet>
            {/* <CustomTextInput
                label="Name"
                value={nameObj?.value}
                onChangeText={val => updateField("nameObj", { value: val })}
                theme={theme}
                placeholder="Enter your name"
                style={localStyles.gap}
            />

            <CustomTextInput
                label="Email"
                value={emailObj?.value}
                onChangeText={val => updateField("emailObj", { value: val, error: checkEmail(val) })}
                theme={theme}
                placeholder="Enter your email"
                error={emailObj?.error}
                style={localStyles.gap}
            />

            <CounterCard title="Fenders qty?" theme={theme} cardWidth={theme.cardWidth} initialCount={1}
                value={fendersObj?.value || 0}
                onValueChange={val => updateField("fendersObj", { value: val })}
                style={localStyles.gap}
            />

            <CheckboxItem label='test checkbox' theme={theme} checked={checkboxObj?.value || false}
                onValueChange={val => updateField("checkboxObj", { value: val })}
                style={localStyles.gap}
            >
            </CheckboxItem>

            <DateInput style={localStyles.gap} label="Select Date" value={dateObj?.value} onChange={val => updateField("dateObj", { value: val })} />
            <DateInput style={localStyles.gap} label="Select Date2" value={dateObj?.value} onChange={val => updateField("dateObj", { value: val })} />

            <PhotoPicker title="Internal Damages" onImageSelected={(imageUri) => console.log("Selected Image:", imageUri)} theme={theme}
                onValueChange={(updatedPhotos) => updateField("photosObj", { value: updatedPhotos })}
                photos={photosObj?.value || []}
                style={localStyles.gap}
            ></PhotoPicker> */}

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
    checkListContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    gap: {
        marginBottom: 8,
    },
});


const sheetStructure = {
    items: [
        {
            type: 'textInput',
            label: 'Name',
            objectName: 'nameObj',
            placeholder: 'Enter your name'
        },
        {
            type: 'textInputEmail',
            label: 'Email',
            objectName: 'nameObj',
        },
        // {
        //     type: 'counterInput',
        //     label: 'Fenders qty?',
        //     objectName: 'fendersObj',
        // },
        // {
        //     type: 'checkbox',
        //     label: 'test checkbox',
        //     objectName: 'checkboxObj',
        // },
        // {
        //     type: 'dateInput',
        //     label: 'Select Date',
        //     objectName: 'dateObj',
        // },
        // {
        //     type: 'photoPicker',
        //     title: 'Internal Damages',
        //     objectName: 'photosObj',
        // }
    ]
}