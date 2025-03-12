import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View } from 'react-native';
import { parseScreen, assignIds } from './configParser';
import {config} from './config';
// import { createStyles } from '../styles';
import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();

const DynamicNavigator = ({ theme }) => {

    const mainConfig = config()
    console.log('mainConfig',JSON.stringify(mainConfig))

    const screensWithIds = assignIds(mainConfig.items);

    const renderScreens = (screens) => {
        return screens.flatMap((screen, index) => {
            const Component = ({ navigation }) => (
                <View style={[{flex:1},{backgroundColor: theme.colors.background}]}>
                <ScrollView>
                    <View 
                    style={[localStyles.container,{backgroundColor: theme.colors.background}]}
                    >
                        {parseScreen(screen, theme, navigation)}
                    </View>
                </ScrollView>
                </View>
            );

            const screenComponent = (
                <Stack.Screen
                    key={screen.id}
                    name={screen.id}
                    component={Component}
                    options={{ title: screen.title }}
                />
            );

            console.log('Generated Screen Component key:', screen.id);

            const nestedScreens = screen.items ? renderScreens(screen.items) : [];
            return [screenComponent, ...nestedScreens];
        });
    };

    const renderedScreens = renderScreens(screensWithIds);
    // console.log('Rendered screensWithIds:', screensWithIds);

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

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    }
});