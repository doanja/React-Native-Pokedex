import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import PokemonSubList from '../Common/PokemonSubList';
import SubCard from '../Common/SubCard';

export default function AbilityContainer({ abilityData, species }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{abilityData.name}</Text>
      </CardHeader>

      <SubCard header={'description'} data={abilityData.effectEntries} />

      <PokemonSubList header={'learnt by'} species={species} />
    </Card>
  );
}
