import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import API from '../services/pokemonAPI';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const flatListRef = useRef();

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
        ListFooterComponent={() => (
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => {
                if (offset > 0) {
                  setOffset(offset - 20);
                  flatListRef.current.scrollToIndex({ index: 0, animated: true });
                }
              }}>
              <MaterialIcons name='chevron-left' size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOffset(offset + 20);
                flatListRef.current.scrollToIndex({ index: 0, animated: true });
              }}>
              <MaterialIcons name='chevron-right' size={24} />
            </TouchableOpacity>
          </View>
        )}
        data={pokemonList}
        keyExtractor={item => item.name}
        numColumns={2}
        ref={flatListRef}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            url={item.url}
            onPress={() => {
              navigation.navigate('Pokemon', item);
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
