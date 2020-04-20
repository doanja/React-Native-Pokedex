import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import PokemonSubList from '../Common/PokemonSubList';

export default function TypesContainer({ name, species }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>

      <PokemonSubList header={'pokemon with this type'} species={species} />
    </Card>
  );
}
