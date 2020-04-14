import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import PokemonCard from '../Pokemon/PokemonCard';
import Spinner from '../Spinner';

export default function LearnableBy({ species }) {
  const navigation = useNavigation();
  const [collapse, setCollapse] = useState(false);

  return (
    <Card>
      <CardHeader touchable onPress={() => setCollapse(!collapse)}>
        <Text style={globalStyles.headerText}>Held By</Text>
      </CardHeader>

      {collapse ? null : !species ? (
        <Spinner />
      ) : (
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
      )}
    </Card>
  );
}
