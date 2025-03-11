import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NaviTableOfContent from '../components/naviTableOfContent';
import CustomTextInput from '../components/textInput';
import CheckboxItem from '../components/checkboxItem';
import CounterCard from '../components/counterCard';
import DateInput from '../components/dateInput';
import PhotoPicker from '../components/photoPicker2';

export const generateScreen = (screenConfig, navigation, theme) => {

    console.log('screenConfig: navigation', navigation);
    
    return () => (
        <ScrollView style={styles.container}>
            {screenConfig.items.map((item, index) => {
                switch (item.type) {
                    case 'section':
                        return (
                            <NaviTableOfContent
                                key={index}
                                title={item.title}
                                subTitle={item.subTitle || ''}
                                onPress={() => navigation.navigate(item.id)}
                                theme={theme}
                            // cardWidth={theme.cardWidth}
                            />
                        );
                    case 'textInput':
                        return (
                            <CustomTextInput
                                key={index}
                                label={item.title}
                                placeholder={item.placeholder}
                            />
                        );
                    case 'checkbox':
                        return <CheckboxItem key={index} label={item.title} />;
                    case 'counterInput':
                        return <CounterCard key={index} title={item.title} />;
                    case 'dateInput':
                        return <DateInput key={index} label={item.title} />;
                    case 'photoPicker':
                        return <PhotoPicker key={index} title={item.title} />;
                    default:
                        return null;
                }
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});
