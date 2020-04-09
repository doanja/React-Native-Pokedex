import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function ItemFlingEffect({ flingEffect }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Fling Effect</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{!flingEffect ? '-' : flingEffect}</Text>
      </View>
    </Card>
  );
}
