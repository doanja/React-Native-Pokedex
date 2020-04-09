import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function ItemCost({ cost }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Cost</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{cost}</Text>
      </View>
    </Card>
  );
}
