import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
import SearchScreen from './Search';
import LoginScreen from './Login';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Search' component={SearchScreen} />
        <Drawer.Screen name='Login' component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
