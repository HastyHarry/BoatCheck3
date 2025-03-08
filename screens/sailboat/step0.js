import React, { useState } from 'react';
import { View } from 'react-native';
import { createStyles } from '../../styles';
import NaviTableOfContent from '../../components/naviTableOfContent';

//Table of contents
export default function Step0({ navigation, theme }) {


    const styles = createStyles(theme);
    // const style = styles(theme)

    return (
        <View style={[styles.checkListContainer,{padding:16}]}>

            <NaviTableOfContent
                title="Common Information"
                subTitle='Boat Name, Year, Port, etc...'
                onPress={() => navigation.navigate('SailboatStep1')}
                theme={theme}
                cardWidth={theme.cardWidth}
            />

            <NaviTableOfContent
                title="Intenal equipment"
                subTitle='Salon, galley, etc..'
                onPress={() => navigation.navigate('SailboatStep2')}
                theme={theme}
                cardWidth={theme.cardWidth}
            />

        </View>
    );
}