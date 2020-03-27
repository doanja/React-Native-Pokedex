import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function GrowthRate({ growthRate }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Growth Rate</Text>
      </CardHeader>

      <TouchableOpacity>
        <Text style={globalStyles.cardItem}>{growthRate.name}</Text>
      </TouchableOpacity>
    </Card>
  );
}
