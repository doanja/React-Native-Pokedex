import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function Shape({ shape }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Shape</Text>
      </CardHeader>
      {shape ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Shape', {
              shapeName: shape.name,
            })
          }>
          <Text style={globalStyles.cardItem}>{shape.name}</Text>
        </TouchableOpacity>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
