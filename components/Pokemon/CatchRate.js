import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function CatchRate({ catchRate }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Catch Rate</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{catchRate}</Text>
      </View>
    </Card>
  );
}
