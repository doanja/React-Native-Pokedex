import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import MoveTypes from '../Types/Types';
import SubCard from '../Common/SubCard';
import SubCardMultiple from '../Common/SubCardMultiple';

export default function MoveContainer({ name, moveData }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>

      <MoveTypes types={moveData.type} />

      <SubCard header={'description'} data={moveData.description} />

      <SubCard header={'power'} data={moveData.power} />

      <SubCard header={'accuracy'} data={moveData.accuracy} />

      <SubCard header={'power point'} data={moveData.pp} />

      <SubCard header={'priority'} data={moveData.priority} />

      <SubCard header={'damage type'} data={moveData.damageType} capitalize />

      <SubCard header={'target'} data={moveData.target} capitalize />

      <SubCard header={'effect chance'} data={moveData.effectChance} />

      <SubCardMultiple header={'stat changes'} data={moveData.statChanges} capitalize />

      <SubCard header={'stat chance'} data={moveData.statChance} />

      <SubCard header={'drain amount'} data={moveData.drain} />

      <SubCard header={'flinch rate'} data={moveData.flinchChance} />

      <SubCard header={'healing amount'} data={moveData.healing} />

      <SubCard header={'ailment'} data={moveData.ailment} capitalize />

      <SubCard header={'ailment chance'} data={moveData.ailmentChance} />

      <SubCard header={'category'} data={moveData.category} capitalize />

      <SubCard header={'critical rate'} data={moveData.critRate} />

      <SubCard header={'min hits'} data={moveData.minHits} />

      <SubCard header={'max hits'} data={moveData.maxHits} />

      <SubCard header={'min turns'} data={moveData.minTurns} />

      <SubCard header={'max turns'} data={moveData.maxTurns} />
    </Card>
  );
}
