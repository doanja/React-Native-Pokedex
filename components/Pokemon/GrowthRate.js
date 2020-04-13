import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function GrowthRate({ growthRate }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Growth Rate</Text>
      </CardHeader>

      {growthRate ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('GrowthRate', {
              name: growthRate,
            })
          }>
          <Text style={globalStyles.cardItem}>{growthRate}</Text>
        </TouchableOpacity>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
