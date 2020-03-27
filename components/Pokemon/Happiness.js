import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Happiness({ happiness }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Happiness</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{happiness}</Text>
      </View>
    </Card>
  );
}
