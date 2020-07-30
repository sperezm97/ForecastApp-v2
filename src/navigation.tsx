import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppParamList } from './types/Navigation';
import Home from './screens/Home';
import Search from './screens/Search';

const Main = createStackNavigator<AppParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="Home" mode="card" headerMode="none">
        <Main.Screen name="Home" component={Home} />
        <Main.Screen name="Search" component={Search} options={{ headerShown: false }} />
      </Main.Navigator>
    </NavigationContainer>
  );
}
