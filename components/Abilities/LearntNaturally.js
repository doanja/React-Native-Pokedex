import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function LearntNaturally({ learntBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Learned by Pokemon Naturally</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>test</Text>
      </View>
    </Card>
  );
}
