import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Pokedex() {
  return (
    <View style={globalStyles.container}>
      <Text>Pokedex Screen</Text>
    </View>
  );
}
