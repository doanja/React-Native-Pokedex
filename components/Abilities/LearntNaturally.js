import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import PokemonCard from '../Pokemon/PokemonCard';

export default function LearntNaturally({ learntBy }) {
  const navigation = useNavigation();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const arr = [];

    learntBy.forEach(pokemon => {
      if (!pokemon.hidden) {
        arr.push(pokemon);
      }
    });

    setPokemon(arr);
  }, [learntBy]);

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Learned by Pokemon Naturally</Text>
      </CardHeader>

      <View style={globalStyles.container}>
        <FlatList
          data={pokemon}
          keyExtractor={item => item.name}
          numColumns={1}
          renderItem={({ item }) => (
            <PokemonCard
              style={{ width: '30%' }}
              name={item.name}
              url={item.url}
              onPress={() => {
                navigation.navigate('Pokemon', item);
              }}
            />
          )}
        />
      </View>
    </Card>
  );
}
