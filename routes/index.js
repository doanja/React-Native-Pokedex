import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
import LoginScreen from './Login';
import PokedexScreen from './Pokedex';
import FavoritesScreen from './Favorites';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Pokedex' component={PokedexScreen} />
        <Drawer.Screen name='Login' component={LoginScreen} />
        {/* TODO: show favorites only if they're logged in */}
        <Drawer.Screen name='Favorites' component={FavoritesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
