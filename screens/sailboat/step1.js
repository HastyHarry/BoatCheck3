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

export default function Step1({ navigation, theme }) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [date, setDate] = useState(null);
    const [count, setCount] = useState(0);

    const handleSubmit = () => {
        if (!email.includes('@')) {
            setError(true);
        } else {
            setError(false);
            alert('Submitted!');
        }
    };

    // const style = styles(theme)

    return (
        <View style={[localStyles.checkListContainer, { backgroundColor: theme.colors.background, padding: 16}]}>

            <CustomTextInput
                label="Name"
                value={name}
                onChangeText={setName}
                theme={theme}
                placeholder="Enter your name"
            />
            <CustomTextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                theme={theme}
                placeholder="Enter your email"
                error={error}
            />
            <CustomTextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                theme={theme}
                placeholder="Enter your email"
                error={error}
            />

            <CounterCard title="Fenders qty?" theme={theme} cardWidth={theme.cardWidth} initialCount={1} />
            <CounterCard title="Fenders qty?" theme={theme} cardWidth={theme.cardWidth} initialCount={1} />

            <CheckboxItem label='test checkbox' theme={theme}></CheckboxItem>
            <CheckboxItem label='test checkbox' theme={theme}></CheckboxItem>

            <DateInput label="Select Date" value={date} onChange={setDate} />
            <DateInput label="Select Date" value={date} onChange={setDate} />

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