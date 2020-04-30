import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/userAPI';
import FavoritesContainer from '../components/Favorites/FavoritesContainer';
import { useFocusEffect } from '@react-navigation/native';

export default function Favorite() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  const getIdFromURL = url => {
    return url.split('/')[url.split('/').length - 2];
  };

  useFocusEffect(
    useCallback(() => {
      API.getFavorites()
        .then(res => {
          let pokemon = res.data.sort((a, b) =>
            getIdFromURL(a.url) > getIdFromURL(b.url) ? 1 : -1
          );

          setFavoritePokemon(pokemon);
        })
        .catch(err => console.log(err));
    }, [])
  );

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <FavoritesContainer favoritePokemon={favoritePokemon} />
      </ScrollView>
    </View>
  );
}
