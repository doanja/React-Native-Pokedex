import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../images/Spinner';

export default function ItemCost({ cost }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Cost</Text>
      </CardHeader>
      {cost ? (
        <View>
          <Text style={globalStyles.cardText}>{cost}</Text>
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
