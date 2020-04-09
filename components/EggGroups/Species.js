import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card } from '..';
import PokemonCard from '../Pokemon/PokemonCard';

export default function Species({ species }) {
  const navigation = useNavigation();
  return (
    <Card>
      <View style={globalStyles.container}>
        <FlatList
          data={species}
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
