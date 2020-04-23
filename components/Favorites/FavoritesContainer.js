import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import PokemonSubList from '../Common/PokemonSubList';

export default function ItemContainer({ favoritePokemon }) {
  return (
    <View>
      {favoritePokemon.length === 0 ? (
        <TouchableOpacity
          style={globalStyles.cardItem}
          onPress={() => console.log('TODO: navigate to pokedex')}>
          <Text>Click to add Pokemon</Text>
        </TouchableOpacity>
      ) : (
        <PokemonSubList header={'Pokemon'} species={favoritePokemon} />
      )}
    </View>
  );
}
