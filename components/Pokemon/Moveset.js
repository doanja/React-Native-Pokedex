import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import LevelUpMoves from './LevelUpMoves';
import TmMoves from './TmMoves';
import EggMoves from './EggMoves';

export default function Moveset({ moveset }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Moveset</Text>
      </CardHeader>

      <LevelUpMoves moveset={moveset} />

      <TmMoves moveset={moveset} />

      {/* <EggMoves moveset={moveset} /> */}
    </Card>
  );
}
