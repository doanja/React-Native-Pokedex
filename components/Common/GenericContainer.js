import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import PokemonSubList from './PokemonSubList';

/**
 * generic container to display the name of this component and a set of pokemon
 * @param {string} name, the name for the header of this component
 * @param {species} array, the array of pokemon
 */
export default function GenericContainer({ name, species }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>

      <PokemonSubList species={species} />
    </Card>
  );
}
