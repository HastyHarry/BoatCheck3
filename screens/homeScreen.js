import React from 'react';
import { View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { lightCustomTheme, darkCustomTheme } from '../styles';
import NaviCard from '../components/naviCard'


import { createStyles } from '../styles';

export default function HomeScreen({ navigation, theme }) {
  const styles = createStyles(theme);

  const screenWidth = Dimensions.get('window').width;
  const isLargeScreen = screenWidth >= 600;
  const cardWidth = isLargeScreen ? screenWidth / 2 - 32 : screenWidth - 32;

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Select an Option
      </Text>

      {/* Используем naviCard для всех карточек */}
      <NaviCard
        title="Check Sailboat"
        icon="sail-boat"
        onPress={() => navigation.navigate('SailboatStep1')}
        theme={theme}
        cardWidth={cardWidth}
      />
      <NaviCard
        title="Check Catamaran"
        icon="ferry"
        onPress={() => navigation.navigate('CatamaranCheck')}
        theme={theme}
        cardWidth={cardWidth}
      />
      <NaviCard
        title="Inspection History"
        icon="history"
        onPress={() => navigation.navigate('History')}
        theme={theme}
        cardWidth={cardWidth}
      />
    </View>
  );
}
