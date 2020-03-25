import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

import ProgressBar from '../ProgressBar';

export default function Stats({ stats }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Stats</Text>
      </CardHeader>
      <ProgressBar amount={stats.hp} label={'HP'} />
      <ProgressBar amount={stats.attack} label={'Attack'} />
      <ProgressBar amount={stats.defense} label={'Defense'} />
      <ProgressBar amount={stats.specialAttack} label={'Sp. Atk'} />
      <ProgressBar amount={stats.specialDefense} label={'Sp. Def'} />
      <ProgressBar amount={stats.speed} label={'Speed'} />
    </Card>
  );
}
