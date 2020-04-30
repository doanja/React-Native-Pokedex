import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/userAPI';
import FavoritesContainer from '../components/Favorites/FavoritesContainer';
import { useFocusEffect } from '@react-navigation/native';

export default function Favorite() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  useFocusEffect(
    useCallback(() => {
      API.getFavorites()
        .then(res => {
          console.log('TODO: update favoritePokemon state', res.data);
          // TODO: SORT LIST BY URL ID SPLIT
          setFavoritePokemon(res.data);
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
