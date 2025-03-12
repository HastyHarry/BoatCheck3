import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
// Стили для карточки
import { StyleSheet } from 'react-native';

// import { View } from 'react-native-web';
import { useGlobalState } from '../utils/globalContext';
import NaviTableOfContent from './naviTableOfContent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function History({theme}) {

    const { getSavedInspections, loadInspection } = useGlobalState();

    const inspections = getSavedInspections();
    console.log(inspections, inspections)

    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            inspections.map((inspection, index) => {
                return (
                    <NaviTableOfContent
                        key={inspection.id}
                        title={inspection.boatNameObj?.value || 'No boat name'}
                        subTitle={inspection.metadata?.completionTime || ''}
                        // onPress={() => navigation.navigate(item.id)}
                        theme={theme}
                    // cardWidth={theme.cardWidth}
                    />
                )
            })
        // </View>
    )
}


const localStyles = StyleSheet.create({
    card: {
        marginVertical: 8,
        height: 80,
        borderRadius: 12,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    cardContent: {
        flex: 1,
        // paddingVertical: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cardTextTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    cardTextSubTitle: {
        fontSize: 14,
        fontWeight: '300',
        lineHeight: 24
    },
});
