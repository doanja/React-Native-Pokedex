import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import {
  Pokedex,
  Pokemon,
  AlternatePokemonForm,
  Abilities,
  Items,
  EggGroups,
  GrowthRate,
} from '../screens/';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'crimson',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
        title: 'Pokedex',
      }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen
        name='Pokedex'
        component={Pokedex}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='Pokemon'
        component={Pokemon}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='AlternatePokemonForm'
        component={AlternatePokemonForm}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='Abilities'
        component={Abilities}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='Items'
        component={Items}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='EggGroups'
        component={EggGroups}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='GrowthRate'
        component={GrowthRate}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
