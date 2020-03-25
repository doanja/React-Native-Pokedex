import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Height({ height }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Height</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>{height} in.</Text>
      </View>
    </Card>
  );
}
