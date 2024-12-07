import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import HomeScreen from '../screens/homeScreen'
import InspectScreen from '../screens/inspectScreen'

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    const { currentInspectionData } = props
    console.log('CustomDrawerContent',currentInspectionData)

    // if (currentInspectionData.inspectionType === 'SailBoat')
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {currentInspectionData.inspectionType === 'SailBoat' 
                ? (<DrawerItem label="part1" onPress={() => alert('navigation to screen for part 1')} />)
                : (null)
                }
                {/* <DrawerItem label="part1" onPress={() => alert('navigation to screen for part 1')} />
                <DrawerItem label="part2" onPress={() => alert('navigation to screen for part 2')} />
                <DrawerItem label="part3" onPress={() => alert('navigation to screen for part 3')} /> */}
            </DrawerContentScrollView>
        )
}

const Drawer = createDrawerNavigator();

export default function DrawerComponent({ theme, setCurrentInspection, currentInspectionData}) {
    // setCurrentInspection({inspectionType: 'Test'})

    console.log('Drawer',theme, setCurrentInspection, currentInspectionData)

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} currentInspectionData={currentInspectionData} />}
        >
            <Drawer.Screen name="Check" component={(props) => <HomeScreen {...props} 
                theme={theme} 
                setCurrentInspection = {setCurrentInspection}
                currentInspectionData = {currentInspectionData}/>} 
            />
            <Drawer.Screen name="Inspections Hstory" component={(props) => <InspectScreen {...props} theme={theme} />} />
        </Drawer.Navigator>
    );
}

