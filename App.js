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

import HomeScreen from './screens/homeScreen'
import InspectScreen from './screens/inspectScreen'

// import activeTheme from './themes'

SplashScreen.preventAutoHideAsync();

// function HomeScreen() {
//   const theme = useTheme();
//   return (
//     <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const theme = activeTheme();

// function SettingsScreen() {
//   return (
//     <View style={{backgroundColor: theme.colors.background, flex: 1, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {

  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? { ...MD3DarkTheme } : { ...MD3LightTheme }

  const HomeScreenWithTheme = (props) => <HomeScreen {...props} theme={theme} />;

  const InspectScreenWithTheme = (props) => <InspectScreen {...props} theme={theme} />;

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
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: theme.colors.background },
            tabBarActiveTintColor: theme.colors.onSurface,
            tabBarInactiveTintColor: theme.colors.backdrop,
          }}
        >
          <Tab.Screen
            name="Check"
            component={HomeScreenWithTheme}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="clipboard-edit-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Inspections"
            component={InspectScreenWithTheme}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
