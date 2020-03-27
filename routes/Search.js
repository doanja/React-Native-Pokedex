import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Search } from '../screens/';

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
        }
      }}>
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  );
}
