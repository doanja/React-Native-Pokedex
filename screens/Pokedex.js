import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../constants/theme';

export default function Pokedex() {
  return (
    <View style={theme.container}>
      <Text>Pokedex Screen</Text>
    </View>
  );
}
