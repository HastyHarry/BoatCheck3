import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { createStyles } from '../../styles';
import CustomTextInput from '../../components/textInput'
import DateInput from '../../components/dateInput';
import CheckboxItem from '../../components/checkboxItem';
import NaviCard from '../../components/naviCard';
import CounterCard from '../../components/counterCard'
import PhotoPicker from '../../components/photoPicker2';

import { useGlobalState } from '../../utils/globalContext';
// import { useGlobalState } from '../../utils/appContext';

const parseSheet = ({ sheet, theme, source, updateField, checkEmail }) => {
    const { items } = sheet;
    return items.map((item, index) => {
        switch (item.type) {
            case 'textInput':
                return <CustomTextInput
                    key={index}
                    label={item.label}
                    value={source.state[item.objectName]?.value}
                    onChangeText={val => updateField(item.objectName, { value: val })}
                    theme={theme}
                    placeholder={item.placeholder}
                    style={localStyles.gap}
                />
            case 'textInputEmail':
                return <CustomTextInput
                    key={index}
                    label={item.label}
                    value={source.state[item.objectName]?.value}
                    onChangeText={val => updateField(item.objectName, { value: val, error: checkEmail(val) })}
                    theme={theme}
                    placeholder={item.placeholder}
                    error={source.state[item.objectName]?.error}
                    style={localStyles.gap}
                />
            case 'counterInput':
                return <CounterCard
                    key={index}
                    title={item.label}
                    theme={theme}
                    cardWidth={theme.cardWidth}
                    initialCount={1}
                    value={source.state[item.objectName]?.value || 0}
                    onValueChange={val => updateField(item.objectName, { value: val })}
                    style={localStyles.gap}
                />
            case 'checkbox':
                return <CheckboxItem
                    key={index}
                    label={item.label}
                    theme={theme}
                    checked={source.state[item.objectName]?.value || false}
                    onValueChange={val => updateField(item.objectName, { value: val })}
                    style={localStyles.gap}
                />
            case 'dateInput':
                return <DateInput
                    key={index}
                    label={item.label}
                    value={source.state[item.objectName]?.value}
                    onChange={val => updateField(item.objectName, { value: val })}
                    style={localStyles.gap}
                />
            case 'photoPicker':
                return <PhotoPicker
                    key={index}
                    title={item.title}
                    theme={theme}
                    onValueChange={(updatedPhotos) => updateField(item.objectName, { value: updatedPhotos })}
                    photos={source.state[item.objectName]?.value || []}
                    style={localStyles.gap}
                />
            default:
                return <Text key={index} style={localStyles.gap}>Unknown item type</Text>
        }
    });
}

export default function Step1({ navigation, theme }) {
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);

    let source = useGlobalState();
    const { updateField } = source

    const checkEmail = (string) => !(string.includes("@") && string.includes("."))

    const checkBoxHandler = (checked) => {
        console.log('checkbox handler', checked)
    }
    const counterHandler = (value) => {
        console.log('counterHandler', { value })
    }

    const parsedSheet = parseSheet({ sheet: sheetStructure, theme, source, updateField, checkEmail })
    console.log('parsed sheet', parsedSheet)

    return (
        <ScrollView>
            <View style={[localStyles.checkListContainer, { backgroundColor: theme.colors.background, padding: 16 }]}>
                {parsedSheet}
            </View>
        </ScrollView>
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
            type: 'textInput',
            label: 'BoatName',
            objectName: 'boatNameObj',
            placeholder: 'Enter Boat name'
        },
        {
            type: 'textInputEmail',
            label: 'Email',
            objectName: 'emailObj',
        },
        {
            type: 'counterInput',
            label: 'Fenders qty?',
            objectName: 'fendersObj',
        },
        {
            type: 'counterInput',
            label: 'captans qty?',
            objectName: 'cptObj',
        },
        {
            type: 'checkbox',
            label: 'test checkbox',
            objectName: 'checkboxObj',
        },
        {
            type: 'dateInput',
            label: 'Select Date',
            objectName: 'dateObj',
        },
        {
            type: 'photoPicker',
            title: 'Internal Overview',
            objectName: 'internalOverviewObj',
        },
        {
            type: 'photoPicker',
            title: 'Internal Damages',
            objectName: 'internalDamagesObj',
        }
    ]
}