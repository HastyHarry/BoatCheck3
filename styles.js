// import { MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
// import { useColorScheme } from 'react-native';

// export default function activeTheme(){
//   const colorScheme = useColorScheme();

//   return colorScheme === 'dark' ? {...MD3DarkTheme} : {...MD3LightTheme}
// }\

import { View, StyleSheet } from 'react-native';

export const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    title: {
      marginBottom: 16,
      textAlign: 'center',
      color: theme.colors.onBackground,
    },
    card: {
      marginVertical: 8,
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 10,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    input: {
      marginBottom: 16,
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.onSurface,
      padding: 10,
      borderRadius: 8,
    },
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: theme.colors.onPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      marginBottom: 16,
      textAlign: 'center',
    },
    card: {
      marginVertical: 8,
    },
    input: {
      marginBottom: 16,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export const lightCustomTheme = () => (
    {
        "colors": {
          "primary": "rgb(87, 101, 0)",
          "onPrimary": "rgb(255, 255, 255)",
          "primaryContainer": "rgb(217, 236, 122)",
          "onPrimaryContainer": "rgb(25, 30, 0)",
          "secondary": "rgb(93, 97, 69)",
          "onSecondary": "rgb(255, 255, 255)",
          "secondaryContainer": "rgb(226, 229, 194)",
          "onSecondaryContainer": "rgb(26, 29, 8)",
          "tertiary": "rgb(59, 102, 92)",
          "onTertiary": "rgb(255, 255, 255)",
          "tertiaryContainer": "rgb(189, 236, 223)",
          "onTertiaryContainer": "rgb(0, 32, 26)",
          "error": "rgb(186, 26, 26)",
          "onError": "rgb(255, 255, 255)",
          "errorContainer": "rgb(255, 218, 214)",
          "onErrorContainer": "rgb(65, 0, 2)",
          "background": "rgb(255, 252, 244)",
          "onBackground": "rgb(28, 28, 23)",
          "surface": "rgb(255, 252, 244)",
          "onSurface": "rgb(28, 28, 23)",
          "surfaceVariant": "rgb(228, 227, 211)",
          "onSurfaceVariant": "rgb(70, 72, 59)",
          "outline": "rgb(119, 120, 106)",
          "outlineVariant": "rgb(199, 199, 183)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(49, 49, 43)",
          "inverseOnSurface": "rgb(243, 241, 232)",
          "inversePrimary": "rgb(189, 208, 98)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(247, 244, 232)",
            "level2": "rgb(242, 240, 225)",
            "level3": "rgb(237, 235, 217)",
            "level4": "rgb(235, 234, 215)",
            "level5": "rgb(232, 231, 210)"
          },
          "surfaceDisabled": "rgba(28, 28, 23, 0.12)",
          "onSurfaceDisabled": "rgba(28, 28, 23, 0.38)",
          "backdrop": "rgba(48, 49, 38, 0.4)"
        }
      }
)

export const darkCustomTheme = () => (
    {
        "colors": {
          "primary": "rgb(189, 208, 98)",
          "onPrimary": "rgb(44, 52, 0)",
          "primaryContainer": "rgb(65, 76, 0)",
          "onPrimaryContainer": "rgb(217, 236, 122)",
          "secondary": "rgb(198, 201, 168)",
          "onSecondary": "rgb(47, 50, 27)",
          "secondaryContainer": "rgb(69, 73, 47)",
          "onSecondaryContainer": "rgb(226, 229, 194)",
          "tertiary": "rgb(162, 208, 195)",
          "onTertiary": "rgb(5, 55, 46)",
          "tertiaryContainer": "rgb(34, 78, 69)",
          "onTertiaryContainer": "rgb(189, 236, 223)",
          "error": "rgb(255, 180, 171)",
          "onError": "rgb(105, 0, 5)",
          "errorContainer": "rgb(147, 0, 10)",
          "onErrorContainer": "rgb(255, 180, 171)",
          "background": "rgb(28, 28, 23)",
          "onBackground": "rgb(229, 226, 218)",
          "surface": "rgb(28, 28, 23)",
          "onSurface": "rgb(229, 226, 218)",
          "surfaceVariant": "rgb(70, 72, 59)",
          "onSurfaceVariant": "rgb(199, 199, 183)",
          "outline": "rgb(145, 146, 131)",
          "outlineVariant": "rgb(70, 72, 59)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(229, 226, 218)",
          "inverseOnSurface": "rgb(49, 49, 43)",
          "inversePrimary": "rgb(87, 101, 0)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(36, 37, 27)",
            "level2": "rgb(41, 42, 29)",
            "level3": "rgb(46, 48, 31)",
            "level4": "rgb(47, 50, 32)",
            "level5": "rgb(51, 53, 34)"
          },
          "surfaceDisabled": "rgba(229, 226, 218, 0.12)",
          "onSurfaceDisabled": "rgba(229, 226, 218, 0.38)",
          "backdrop": "rgba(48, 49, 38, 0.4)"
        }
      }
)