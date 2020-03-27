import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Habitat({ habitat }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Habitat</Text>
      </CardHeader>

      {/* TODO: add onPress event */}
      <TouchableOpacity>
        <Text style={globalStyles.cardItem}>{habitat.name}</Text>
      </TouchableOpacity>
    </Card>
  );
}
