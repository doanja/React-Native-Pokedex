import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Favorites } from '../screens/';
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
    </Stack.Navigator>
  );
}
