import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function Gender({ gender }) {
  const genderInfo = (
    <View>
      <Text style={globalStyles.cardText}>Male: {gender.genderRatioMale}%</Text>
      <Text style={globalStyles.cardText}>Female: {gender.genderRatioFemale}%</Text>
    </View>
  );

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Gender Ratio</Text>
      </CardHeader>
      {gender ? <View>{gender.genderRatio === -1 ? 'Genderless' : genderInfo}</View> : <Spinner />}
    </Card>
  );
}
