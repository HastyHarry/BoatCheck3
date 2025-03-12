import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, useColorScheme, Dimensions } from 'react-native';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

import { GlobalProvider } from './utils/globalContext'

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import DynamicNavigator from './utils/dynamicNavi';


const Stack = createStackNavigator();

import { lightCustomTheme, darkCustomTheme } from './styles'


const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth >= 600;
const borderMargin = 32
const cardWidth = isLargeScreen
  ? screenWidth / 2 - borderMargin
  : screenWidth - borderMargin;
const workingAreaWidth = isLargeScreen
  ? screenWidth / 2 - borderMargin
  : screenWidth - borderMargin;

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  const [isLoading, setIsLoading] = useState(false); // Initialize loading state

  // console.log("screenWidth", { screenWidth, isLargeScreen, workingAreaWidth })


  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? { ...darkCustomTheme() } : { ...lightCustomTheme() }
  theme.cardWidth = cardWidth
  theme.workingAreaWidth = workingAreaWidth
  theme.screenWidth = screenWidth

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <GlobalProvider>
          {!isLoading ? (
              <NavigationContainer>
                <DynamicNavigator theme={theme}></DynamicNavigator>
              </NavigationContainer>
            )
            : (<NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarStyle: { backgroundColor: theme.colors.secondaryContainer },
                  tabBarActiveTintColor: theme.colors.secondary,
                  tabBarInactiveTintColor: theme.colors.onSecondary,
                }}>
                <Stack.Screen
                  name="Loading"
                  component={LoadingScreen}
                  options={{ title: "Loading" }} />
              </Stack.Navigator>
            </NavigationContainer>
            )

          }
        </GlobalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}