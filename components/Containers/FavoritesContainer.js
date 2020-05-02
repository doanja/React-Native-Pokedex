import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import PokemonSubList from '../Common/PokemonSubList';

export default function FavoriteContainer({ favoritePokemon }) {
  const navigation = useNavigation();

  return (
    <View>
      {favoritePokemon.length === 0 ? (
        <TouchableOpacity
          style={globalStyles.cardItem}
          onPress={() => navigation.navigate('Pokedex')}>
          <Text>Click to add Pokemon</Text>
        </TouchableOpacity>
      ) : (
        <PokemonSubList header={'Pokemon'} species={favoritePokemon} />
      )}
    </View>
  );
}
