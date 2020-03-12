import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/Pokedex';

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
      <Stack.Screen name='Pokedex' component={Pokedex} />
    </Stack.Navigator>
  );
}
