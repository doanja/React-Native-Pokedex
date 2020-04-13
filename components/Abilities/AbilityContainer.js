import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';

import AbilityDescription from './AbilityDescription';
import LearnableBy from './LearnableBy';
import Spinner from '../Spinner';

export default function AbilityContainer({ abilityData, learntBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{abilityData.name}</Text>
      </CardHeader>

      {abilityData ? <AbilityDescription description={abilityData.effectEntries} /> : <Spinner />}

      {learntBy ? <LearnableBy learntBy={learntBy} /> : <Spinner />}
    </Card>
  );
}
