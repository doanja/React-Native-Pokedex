import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Shape({ shape }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Shape</Text>
      </CardHeader>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Shape', {
            shapeName: shape.name,
          })
        }>
        <Text style={globalStyles.cardItem}>{shape.name}</Text>
      </TouchableOpacity>
    </Card>
  );
}
