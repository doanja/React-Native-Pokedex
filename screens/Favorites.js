import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/userAPI';
import FavoritesContainer from '../components/Favorites/FavoritesContainer';

export default function Favorite() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  useEffect(() => {
    API.getFavorites()
      .then(res => {
        console.log('TODO: update favoritePokemon state', res.data);
        setFavoritePokemon(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <FavoritesContainer
          favoritePokemon={
            favoritePokemon
            //   [
            //   { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
            //   { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
            //   { name: 'tyranitar', url: 'https://pokeapi.co/api/v2/pokemon-species/248/' },
            // ]
          }
        />
      </ScrollView>
    </View>
  );
}
