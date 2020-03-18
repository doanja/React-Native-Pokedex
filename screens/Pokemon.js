import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import Card from '../components/Card';
import PokemonCard from '../components/PokemonCard';

export default function Pokemon({ route }) {
  const { name, url } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{name}</Text>
      </Card>
    </View>
  );
}
