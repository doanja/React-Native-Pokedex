import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
import LoginScreen from './Login';
import PokedexScreen from './Pokedex';
import FavoritesScreen from './Favorites';

const Drawer = createDrawerNavigator();

import { useSelector } from 'react-redux';

export default function RootDrawerNavigator() {
  // redux hooks
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return isLoggedIn ? (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Favorites'>
        <Drawer.Screen name='Home' component={FavoritesScreen} />
        <Drawer.Screen name='Pokedex' component={PokedexScreen} />
        {/* TODO: show signout? */}
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Pokedex' component={PokedexScreen} />
        <Drawer.Screen name='Login' component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
