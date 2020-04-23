import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens/';
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
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
