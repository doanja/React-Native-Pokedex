import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
import Search from './Search';
// import Login from './Login'

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Search' component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
