import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Abilities({ abilities }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Abilities</Text>
      </CardHeader>
      {abilities.map(ability => (
        <View key={ability.name}>
          <TouchableOpacity>
            <Text style={globalStyles.cardItem}>{ability.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Card>
  );
}
