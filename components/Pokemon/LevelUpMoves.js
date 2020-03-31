import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function LevelUpMoves({ moveset }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Level Up Moves</Text>
      </CardHeader>
      <TouchableOpacity>
        <Text style={globalStyles.cardItem} onPress={() => setCollapse(!collapse)}>
          Level Learned: Move Name
        </Text>
      </TouchableOpacity>
      {collapse
        ? null
        : moveset.levelUpMoves.map(move => (
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
