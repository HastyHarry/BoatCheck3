// import { MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
// import { useColorScheme } from 'react-native';

// export default function activeTheme(){
//   const colorScheme = useColorScheme();

//   return colorScheme === 'dark' ? {...MD3DarkTheme} : {...MD3LightTheme}
// }\

import { View, StyleSheet } from 'react-native';

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
      marginTop: 16,
    },
  });