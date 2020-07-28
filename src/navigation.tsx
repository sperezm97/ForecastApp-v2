import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Search from './screens/Search';

const Main = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen
          name="Home"
          component={Home}
          options={{
            headerBackground: '',
          }}
        />
        <Main.Screen name="Search" component={Search} />
      </Main.Navigator>
    </NavigationContainer>
  );
}
