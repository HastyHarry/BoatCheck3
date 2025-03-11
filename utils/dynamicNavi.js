import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View } from 'react-native';
import { parseScreen, assignIds } from './configParser';
import config from './config';


const Stack = createStackNavigator();

const DynamicNavigator = ({ theme }) => {
  const screensWithIds = assignIds(config.items);

  const renderScreens = (screens) => {
    return screens.flatMap((screen, index) => {
      const Component = ({ navigation }) => (
        <ScrollView>
          <View style={{ padding: 16 }}>
            {parseScreen(screen, theme, navigation)}
          </View>
        </ScrollView>
      );

      const screenComponent = (
        <Stack.Screen
          key={index}
          name={screen.id}
          component={Component}
          options={{ title: screen.title }}
        />
      );

      console.log('Generated Screen Component:', screenComponent);

      const nestedScreens = screen.items ? renderScreens(screen.items) : [];
      return [screenComponent, ...nestedScreens];
    });
  };

  const renderedScreens = renderScreens(screensWithIds);
  console.log('Rendered screensWithIds:', screensWithIds);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.surfaceVariant },
        headerTintColor: theme.colors.onSurfaceVariant,
        headerTitleAlign: 'center',
      }}
    >
      {renderedScreens}
    </Stack.Navigator>
  );
};

export default DynamicNavigator;