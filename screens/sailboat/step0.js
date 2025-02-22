import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { createStyles } from '../../styles';
import CustomTextInput from '../../components/textInput'
import DateInput from '../../components/dateInput';
import NaviTableOfContent from '../../components/naviTableOfContent';


export default function Step0({ navigation, theme }) {


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [error, setError] = useState(false);
    // const [date, setDate] = useState(null);

    // const handleSubmit = () => {
    //     if (!email.includes('@')) {
    //         setError(true);
    //     } else {
    //         setError(false);
    //         alert('Submitted!');
    //     }
    // };

    const styles = createStyles(theme);
    // const style = styles(theme)

    return (
        <View style={styles.checkListContainer}>

            <NaviTableOfContent
                title = "Common Information"
                subTitle = 'Boat Name, Year, Port, etc...'
                onPress={() => navigation.navigate('SailboatStep1')}
                theme={theme}
                cardWidth={theme.cardWidth}
            />

        </View>
    );
}