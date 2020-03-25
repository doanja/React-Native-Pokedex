import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Height({ experience }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Experience</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{experience}</Text>
      </View>
    </Card>
  );
}
