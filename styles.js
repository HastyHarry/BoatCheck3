// import { MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
// import { useColorScheme } from 'react-native';

// export default function activeTheme(){
//   const colorScheme = useColorScheme();

//   return colorScheme === 'dark' ? {...MD3DarkTheme} : {...MD3LightTheme}
// }\
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const isLargeScreen = screenWidth >= 600;  // When screen is large, use two columns
const cardWidth = isLargeScreen ? (screenWidth / 2) - 32 : screenWidth - 32;


import { StyleSheet } from 'react-native';

export const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    checkListContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    title: {
      marginBottom: 16,
      textAlign: 'center',
      color: theme.colors.secondary,
    },
    card: {
      backgroundColor: theme.colors.surface,
      marginVertical: 8,
      borderRadius: 12,
      padding: 16,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
      alignItems: 'center',
    },
    cardIcon: {
      marginBottom: 10,
    },
    cardText: {
      color: theme.colors.onSurface,
      fontSize: 18,
      fontWeight: 'bold',
    },
    photoContainer: {
      alignItems: 'center',
      marginVertical: 16,
    },
    imagePreview: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    imagePlaceholder: {
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
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
      "primary": "rgb(0, 104, 116)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(151, 240, 255)",
      "onPrimaryContainer": "rgb(0, 31, 36)",
      "secondary": "rgb(74, 98, 103)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(205, 231, 236)",
      "onSecondaryContainer": "rgb(5, 31, 35)",
      "tertiary": "rgb(82, 94, 125)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(218, 226, 255)",
      "onTertiaryContainer": "rgb(14, 27, 55)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(250, 253, 253)",
      "onBackground": "rgb(25, 28, 29)",
      "surface": "rgb(250, 253, 253)",
      "onSurface": "rgb(25, 28, 29)",
      "surfaceVariant": "rgb(219, 228, 230)",
      "onSurfaceVariant": "rgb(63, 72, 74)",
      "outline": "rgb(111, 121, 122)",
      "outlineVariant": "rgb(191, 200, 202)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(46, 49, 50)",
      "inverseOnSurface": "rgb(239, 241, 241)",
      "inversePrimary": "rgb(79, 216, 235)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(238, 246, 246)",
        "level2": "rgb(230, 241, 242)",
        "level3": "rgb(223, 237, 238)",
        "level4": "rgb(220, 235, 237)",
        "level5": "rgb(215, 232, 234)"
      },
      "surfaceDisabled": "rgba(25, 28, 29, 0.12)",
      "onSurfaceDisabled": "rgba(25, 28, 29, 0.38)",
      "backdrop": "rgba(41, 50, 52, 0.4)"
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