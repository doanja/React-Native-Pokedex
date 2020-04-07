import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';

import { AbilityDescription } from './index';
import LearntNaturally from './LearntNaturally';
import HiddenAbility from './HiddenAbility';

export default function AbilityTitle({ abilityData, learntBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{abilityData.name}</Text>
      </CardHeader>

      <AbilityDescription description={abilityData.effectEntries} />

      <LearntNaturally learntBy={learntBy} />
      <HiddenAbility HiddenAbility={learntBy} />
    </Card>
  );
}
