import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

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
              habitatName: habitat,
            })
          }>
          <Text style={globalStyles.cardItem}>{habitat}</Text>
        </TouchableOpacity>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
