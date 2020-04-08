import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import PokemonCard from '../Pokemon/PokemonCard';

export default function LearnableBy({ learntBy }) {
  const navigation = useNavigation();
  const [collapse, setCollapse] = useState(false);

  return (
    <Card>
      <CardHeader touchable onPress={() => setCollapse(!collapse)}>
        <Text style={globalStyles.headerText}>Learned by Pokemon Naturally</Text>
      </CardHeader>

      {collapse ? null : (
        <View style={globalStyles.container}>
          <FlatList
            data={learntBy}
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
      )}
    </Card>
  );
}
