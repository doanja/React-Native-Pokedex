import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';
import MoveTypes from '../Pokemon/Types';
import SubCard from '../Common/SubCard';
import MultipleItemSubCard from '../Common/MultipleItemSubCard';

export default function MoveContainer({ moveName, moveData }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{moveName}</Text>
      </CardHeader>

      <MoveTypes types={moveData.type} />

      {/* <SubCard header={'description'} data={moveData.description} />

      <SubCard header={'power'} data={moveData.power} />

      <SubCard header={'accuracy'} data={moveData.accuracy} />

      <SubCard header={'power point'} data={moveData.pp} />

      <SubCard header={'priority'} data={moveData.priority} />

      <SubCard header={'damage type'} data={moveData.damageType} />

      <SubCard header={'target'} data={moveData.target} />

      <SubCard header={'effect chance'} data={moveData.effectChance} /> */}

      {/* <MultipleItemSubCard header={'stat changes'} data={moveData.statChanges} /> */}

      {/* <SubCard header={'stat chance'} data={moveData.statChance} /> */}
    </Card>
  );
}
