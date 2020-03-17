import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import API from '../services/pokemonAPI';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    API.getPokemonList(offset)
      .then(res => {
        setPokemonList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [offset]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={pokemonList}
        keyExtractor={item => item.name}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            url={item.url}
            onPress={() => navigation.navigate('Pokemon', item)}
          />
        )}
      />
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            offset <= 0 ? null : setOffset(offset - 20);
          }}>
          <MaterialIcons name='chevron-left' size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOffset(offset + 20)}>
          <MaterialIcons name='chevron-right' size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
