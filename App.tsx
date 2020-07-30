/* eslint-disable camelcase */
import React from 'react';
import { SafeAreaView, StatusBar, ViewStyle, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigator from './src/navigation';
import Providers from './src/hooks/providers';
import { isIOs } from './src/utils';

type Styles = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
});

export default function App(): React.ReactElement {
  const [fontsLoaded] = useFonts({
    'ProductSans-Bold': require('./src/assets/fonts/ProductSans-Bold.ttf'),
    'ProductSans-Regular': require('./src/assets/fonts/ProductSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isIOs ? 'dark-content' : 'default'} />
      <Providers>
        <AppNavigator />
      </Providers>
    </SafeAreaView>
  );
}
