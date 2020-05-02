import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, Pokemon } from '../screens/';

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
      }}>
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen
        name='Pokemon'
        component={Pokemon}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
