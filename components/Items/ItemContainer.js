import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';

// import AbilityDescription from './AbilityDescription';
// import LearnableBy from './LearnableBy';

export default function ItemContainer({ itemData, learntBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{itemData.name}</Text>
      </CardHeader>

      {/* <AbilityDescription description={abilityData.effectEntries} />

      <LearnableBy learntBy={learntBy} /> */}
    </Card>
  );
}
