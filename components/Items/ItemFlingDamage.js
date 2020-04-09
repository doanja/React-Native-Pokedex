import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function ItemFlingDamage({ flingDamage }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Fling Damage</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{flingDamage}</Text>
      </View>
    </Card>
  );
}
