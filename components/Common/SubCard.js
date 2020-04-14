import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function SubCard({ header, data }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{header}</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{!data ? '-' : data}</Text>
      </View>
    </Card>
  );
}
