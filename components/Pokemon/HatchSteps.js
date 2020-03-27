import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function HatchSteps({ hatchSteps }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Hatch Steps</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{hatchSteps}</Text>
      </View>
    </Card>
  );
}
