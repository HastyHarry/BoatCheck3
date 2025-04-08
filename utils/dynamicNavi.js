import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View } from 'react-native';
import { parseScreen, assignIds } from './configParser';
import { config } from './config';
// import { createStyles } from '../styles';
import { StyleSheet } from 'react-native';
import { useGlobalState } from './globalContext';
import { CommonActions } from '@react-navigation/native';

const Stack = createStackNavigator();

const DynamicNavigator = ({ theme }) => {
    const { activeInspection, restorePreviousInspection, rootRouteName } = useGlobalState();

    const mainConfig = config()
    // console.log('mainConfig',JSON.stringify(mainConfig))

    const screensWithIds = assignIds(mainConfig.items);

    const renderScreens = (screens) => {
        return screens.flatMap((screen, index) => {
            const Component = ({ navigation }) => {
                // Hook into navigation events to handle back navigation properly
                useEffect(() => {
                    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
                        // If we're in view mode and navigating to the home screen, we need to restore the previous inspection
                        if (activeInspection.isViewMode && 
                            (e.data.action.type === 'NAVIGATE' || e.data.action.type === 'GO_BACK') &&
                            ['SailboatStep0', 'CatamaranCheck', 'History'].includes(e.data.action.payload?.name)) {
                            e.preventDefault(); // Prevent the default navigation
                            
                            // Restore previous inspection state
                            restorePreviousInspection();
                            
                            // Then navigate to the intended destination
                            if (rootRouteName) {
                                navigation.navigate(rootRouteName);
                            } else {
                                navigation.dispatch(
                                    CommonActions.reset({
                                        index: 0,
                                        routes: [{ name: e.data.action.payload?.name || 'SailboatStep0' }],
                                    })
                                );
                            }
                        }
                    });
                    
                    return unsubscribe;
                }, [navigation, activeInspection.isViewMode]);
                
                return (
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
            };

            const screenComponent = (
                <Stack.Screen
                    key={screen.id}
                    name={screen.id}
                    component={Component}
                    options={{ title: screen.title }}
                />
            );

            // console.log('Generated Screen Component key:', screen.id);

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