import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Favorites,
  Pokedex,
  Pokemon,
  PokemonForms,
  Abilities,
  Items,
  EggGroups,
  GrowthRate,
  Habitat,
  Shape,
  Move,
  Types,
} from '../screens/';
import { colors } from '../constants/theme';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name='Favorites' component={Favorites} />
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
        name='PokemonForms'
        component={PokemonForms}
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
      <Stack.Screen
        name='Habitat'
        component={Habitat}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='Shape'
        component={Shape}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='Move'
        component={Move}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='Types'
        component={Types}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
