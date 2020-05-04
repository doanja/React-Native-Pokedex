import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import API from '../services/userAPI';
import FavoritesContainer from '../components/Containers/FavoritesContainer';

// redux
import { useDispatch } from 'react-redux';
import { resetState } from '../redux/login/loginActions';

import { clearStorage } from '../constants/helper';
import { Button, Text } from '../components';

export default function Favorite() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  const signout = () => {
    dispatch(resetState());
    clearStorage();
    navigation.navigate('Home');
  };

  return (
    <View style={globalStyles.container}>
      <Button gradient onPress={signout}>
        <Text center white semibold>
          Signout
        </Text>
      </Button>
      <ScrollView>
        <FavoritesContainer favoritePokemon={favoritePokemon} />
      </ScrollView>
    </View>
  );
}
