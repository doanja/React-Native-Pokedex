import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function AbilityDescription({ description }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Ability Description</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{description}</Text>
      </View>
    </Card>
  );
}
