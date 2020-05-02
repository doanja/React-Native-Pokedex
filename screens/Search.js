import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import SearchContainer from '../components/Containers/SearchContainer';
import API from '../services/pokemonAPI';
import { alertMsg } from '../constants/helper';

export default function Search() {
  const navigation = useNavigation();

  const [pokemon, setPokemon] = useState({ name: '', url: '' });

  // TODO: make api call, redirect to the pokemon component
  const search = values => {
    const { search } = values;
    console.log('search :>> ', search);
    // API.getPokemonData(name)
    //   .then(res => console.log('res.data', res.data))
    //   .catch(err => console.log(err));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <SearchContainer search={search} />
      </View>
    </TouchableWithoutFeedback>
  );
}
