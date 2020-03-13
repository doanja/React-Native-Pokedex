import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import Card from '../components/Card';
import PokemonCard from '../components/PokemonCard';

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
    <View style={globalStyles.container}>
      <FlatList
        data={pokemonList}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Pokemon', item)}>
            <Card>
              {/* <Text style={globalStyles.titleText}>{item.name}</Text> */}
              <PokemonCard name={item.name} url={item.url} />
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
