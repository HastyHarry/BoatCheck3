import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { createStyles} from '../../styles';
import CustomTextInput from '../../components/textInput'
import DateInput from '../../components/dateInput';


export default function Step1({ navigation, theme }) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [date, setDate] = useState(null);

    const handleSubmit = () => {
        if (!email.includes('@')) {
            setError(true);
        } else {
            setError(false);
            alert('Submitted!');
        }
    };

    const styles = createStyles(theme);
    // const style = styles(theme)

    return (
        <View style={styles.checkListContainer}>
            <Text style={styles.Text}>Internal Checks: Salon, Cabins, etc.</Text>

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

            <DateInput label="Select Date" value={date} onChange={setDate} />

            <Button mode="contained" onPress={() => navigation.navigate('SailboatStep2')}
                buttonColor = {theme.colors.secondary}
                textColor = {theme.colors.onSecondary}
                style = {[{borderRadius: 5}, {marginTop: 8}]}>
                
                Submit
            </Button >
        </View>
    );
}