import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function HeldItems({ evs }) {
  console.log('evs :', evs);
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Effort Values</Text>
      </CardHeader>
      {evs.map(ev => (
        <View key={ev}>
          <Text style={[globalStyles.cardText, { textTransform: 'capitalize' }]}>{ev}</Text>
        </View>
      ))}
    </Card>
  );
}
