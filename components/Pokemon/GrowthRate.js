import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../images/Spinner';

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
              name: growthRate.name,
            })
          }>
          <Text style={globalStyles.cardItem}>{growthRate.name}</Text>
        </TouchableOpacity>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
