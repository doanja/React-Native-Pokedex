import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function ItemAttribute({ attribute }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Attribute</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{attribute}</Text>
      </View>
    </Card>
  );
}
