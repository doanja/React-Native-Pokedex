import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

import PokemonCard from '../components/PokemonCard';
import { sizes } from '../constants/theme';

export default function Pokedex({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    API.getPokemonList(offset)
      .then(res => {
        setPokemonList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [offset]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            url={item.url}
            onPress={() => navigation.navigate('Pokemon', item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});
