import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import SearchContainer from '../components/Containers/SearchContainer';
import API from '../services/pokemonAPI';
import { alertMsg } from '../constants/helper';

export default function Search() {
  const navigation = useNavigation();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    API.getPokemonListAll()
      .then(res => {
        let arr = [];

        res.data.results.forEach(pokemon =>
          arr.push({
            id: pokemon.url.split('/')[pokemon.url.split('/').length - 2],
            name: pokemon.name,
          })
        );

        setPokemon(arr);
      })
      .catch(err => console.log(err));
  }, []);

  const search = pokemonName => {
    API.getPokemonData(pokemonName)
      .then(res => {
        navigation.navigate('Pokemon', {
          name: res.data.name,
        });
      })
      .catch(err => alertMsg('Error', err));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <SearchContainer search={search} pokemon={pokemon} />
      </View>
    </TouchableWithoutFeedback>
  );
}
