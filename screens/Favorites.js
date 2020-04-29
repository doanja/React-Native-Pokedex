import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
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
        <FavoritesContainer favoritePokemon={favoritePokemon} />
      </ScrollView>
    </View>
  );
}
