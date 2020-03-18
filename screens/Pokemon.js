import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import PokemonCard from '../components/PokemonCard';

export default function Pokemon({ route }) {
  const { name, url } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Card>
        <CardHeader>
          <Text style={globalStyles.headerText}>{name}</Text>
        </CardHeader>
      </Card>
    </ScrollView>
  );
}
