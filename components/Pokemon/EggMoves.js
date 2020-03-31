import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function EggMoves({ moveset }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Egg Moves</Text>
      </CardHeader>
      <View>
        <Text style={globalStyles.cardText}>Move Name</Text>
      </View>
      {moveset.firstEvoMoves.map(move => (
        <View key={move.name}>
          {/* TODO: add onPress event */}
          <TouchableOpacity>
            <Text style={globalStyles.cardItem}>{move.move_name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Card>
  );
}
