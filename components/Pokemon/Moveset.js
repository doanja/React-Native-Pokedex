import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Moveset({ moveset }) {
  useEffect(() => {
    moveset.levelUpMoves.forEach(move => console.log(move.move_name));
  }, []);

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Moveset</Text>
      </CardHeader>
      <TouchableOpacity>
        <Text style={globalStyles.cardText}>Level Learned: Move Name</Text>
      </TouchableOpacity>
      {moveset.levelUpMoves.map(move => (
        <View key={move.name}>
          {/* TODO: add onPress event */}
          <TouchableOpacity>
            <Text style={globalStyles.cardItem}>
              {move.level_learned_at} - {move.move_name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </Card>
  );
}
