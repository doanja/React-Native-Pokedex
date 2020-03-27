import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Shape({ shape }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Shape</Text>
      </CardHeader>

      {/* TODO: add onPress event */}
      <TouchableOpacity>
        <Text style={globalStyles.cardItem}>{shape.name}</Text>
      </TouchableOpacity>
    </Card>
  );
}
