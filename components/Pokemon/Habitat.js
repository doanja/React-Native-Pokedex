import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../images/Spinner';

export default function Habitat({ habitat }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Habitat</Text>
      </CardHeader>
      {habitat ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Habitat', {
              habitatName: habitat.name,
            })
          }>
          <Text style={globalStyles.cardItem}>{habitat.name}</Text>
        </TouchableOpacity>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
