import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'crimson'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerShown: false
      }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen
        name='Pokedex'
        component={Pokedex}
        options={{
          headerShown: true
        }}
      />
      <Stack.Screen
        name='Pokemon'
        component={Pokemon}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  );
}
