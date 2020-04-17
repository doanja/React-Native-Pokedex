import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import PokemonSubList from '../Common/PokemonSubList';
import SubCard from '../Common/SubCard';

export default function TypesContainer({ name, typesData, species }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>

      <PokemonSubList header={'pokemon with this type'} species={species} />
    </Card>
  );
}
