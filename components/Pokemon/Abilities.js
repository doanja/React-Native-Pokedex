import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function Abilities({ abilities }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Abilities</Text>
      </CardHeader>
      {abilities ? (
        abilities.map(ability => (
          <View key={ability.name}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Abilities', {
                  name: ability.name,
                })
              }>
              <Text style={globalStyles.cardItem}>{ability.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
