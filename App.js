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

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { clearAllData, handleSave, handleLoadAll } from './utils/context'
import { lightCustomTheme, darkCustomTheme } from './styles'

import HomeScreen from './screens/homeScreen'
import InspectScreen from './screens/inspectScreen'
import LoadingScreen from './screens/loading'

import Step1 from './screens/sailboat/step1';
import Step2 from './screens/sailboat/step2';

// import activeTheme from './themes'

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {

  const [dataBuffer, setDataBuffer] = useState([]);
  const [inputData, setInput] = useState({ boatName: "" })
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state


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

  const HomeScreenWithTheme = (props) => <HomeScreen {...props} theme={theme} />;
  const InspectScreenWithTheme = (props) => <InspectScreen {...props} theme={theme} />;
  const LoadingScreenWithTheme = (props) => <LoadingScreen {...props} theme={theme} />;
  const Step1WithTheme = (props) => <Step1 {...props} theme={theme} />;
  const Step2WithTheme = (props) => <Step2 {...props} theme={theme} />;

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
      {!isLoading ? (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: theme.colors.secondary },
              headerTintColor: theme.colors.onPrimary,
              headerTitleAlign: 'center',
            }}
          >
            <Stack.Screen
              name = "Home"
              component = {HomeScreenWithTheme}
              options={{ title: "Boat Inspection" }}
            />
            <Stack.Screen name="SailboatCheck" component={InspectScreenWithTheme} options={{ title: "Check Sailboat" }} />
              <Stack.Screen name="SailboatStep1" component={Step1WithTheme} options={{ title: "Sailboat Step 1" }} />
              <Stack.Screen name="SailboatStep2" component={Step2WithTheme} options={{ title: "Sailboat Step 2" }} />
            <Stack.Screen name="CatamaranCheck" component={InspectScreenWithTheme} options={{ title: "Check Catamaran" }} />
            <Stack.Screen name="History" component={InspectScreenWithTheme} options={{ title: "Inspection History" }} />
          </Stack.Navigator>
        </NavigationContainer>)
        : (<NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: { backgroundColor: theme.colors.secondaryContainer },
              tabBarActiveTintColor: theme.colors.secondary,
              tabBarInactiveTintColor: theme.colors.onSecondary,
            }}>
            <Stack.Screen
              name = "Loading"
              component={LoadingScreenWithTheme}
              options={{ title: "Loading" }}/>
          </Stack.Navigator>
        </NavigationContainer>
        )
      }
    </PaperProvider>
  )
}
