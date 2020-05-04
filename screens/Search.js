import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import SearchContainer from '../components/Containers/SearchContainer';
import API from '../services/pokemonAPI';
import { alertMsg } from '../constants/helper';

export default function Search() {
  const navigation = useNavigation();

  const search = values => {
    const { search } = values;

    API.getPokemonData(search)
      .then(res => {
        // TODO: validate pokemon being searched, load search suggestions with pokemon image

        navigation.navigate('Pokemon', {
          name: res.data.name,
        });
      })
      .catch(err => alertMsg('Error', err));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <SearchContainer search={search} />
      </View>
    </TouchableWithoutFeedback>
  );
}
