import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { clearAllData, handleSave, handleLoadAll } from './utils/context'
import { lightCustomTheme, darkCustomTheme } from './styles'

import HomeScreen from './screens/homeScreen'
import InspectScreen from './screens/inspectScreen'
import LoadingScreen from './screens/loading'

import DrawerComponent from './src/drawerComponent'
// import activeTheme from './themes'

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {

  const [dataBuffer, setDataBuffer] = useState([]);
  const [inputData, setInput] = useState({ boatName: "" })
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
  const [currentInspectionData, setCurrentInspection] = useState({inspectionType: null})

  useEffect(() => {
    const loadData = async () => {
      await handleLoadAll(setDataBuffer)
      console.log('dataBuffer', dataBuffer)
      setInput(dataBuffer[dataBuffer.length])
      setIsLoading(false); 
    }
    loadData();
    console.log('APP inputData', inputData)
  }, []); // Empty dependency array means this runs once on mount

  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? { ...darkCustomTheme() } : { ...lightCustomTheme() }

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Or return a loading component
  }


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <DrawerComponent theme={theme} currentInspectionData={currentInspectionData} setCurrentInspection={setCurrentInspection}/>
      </NavigationContainer>
    </PaperProvider>
  )

  // return (
  //   <PaperProvider theme={theme}>
  //     {!isLoading ? (
  //       <NavigationContainer>
  //         <Tab.Navigator
  //           screenOptions={{
  //             headerShown: false,
  //             tabBarStyle: { backgroundColor: theme.colors.secondaryContainer },
  //             tabBarActiveTintColor: theme.colors.secondary,
  //             tabBarInactiveTintColor: theme.colors.onSecondary,
  //           }}
  //         >
  //           <Tab.Screen
  //             name="Check"
  //             component={HomeScreenWithTheme}
  //             options={{
  //               tabBarIcon: ({ color, size }) => (
  //                 <MaterialCommunityIcons name="clipboard-edit-outline" color={color} size={size} />
  //               ),
  //             }}
  //           />
  //           <Tab.Screen
  //             name="Inspections"
  //             component={InspectScreenWithTheme}
  //             options={{
  //               tabBarIcon: ({ color, size }) => (
  //                 <MaterialCommunityIcons name="history" color={color} size={size} />
  //               ),
  //             }}
  //           />
  //         </Tab.Navigator>
  //       </NavigationContainer>)
  //       : (<NavigationContainer>
  //         <Tab.Navigator
  //           screenOptions={{
  //             headerShown: false,
  //             tabBarStyle: { backgroundColor: theme.colors.secondaryContainer },
  //             tabBarActiveTintColor: theme.colors.secondary,
  //             tabBarInactiveTintColor: theme.colors.onSecondary,
  //           }}>
  //           <Tab.Screen
  //             name="Loading"
  //             component={LoadingScreenWithTheme}
  //             options={{
  //               tabBarIcon: ({ color, size }) => (
  //                 <MaterialCommunityIcons name="clipboard-edit-outline" color={color} size={size} />
  //               ),
  //             }}>
  //           </Tab.Screen>
  //         </Tab.Navigator>
  //       </NavigationContainer>
  //       )
  //     }
  //   </PaperProvider>
  // )
}
