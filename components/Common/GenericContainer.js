import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import Species from './Species';
import Spinner from '../images/Spinner';

export default function GenericContainer({ name, species }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>

      {species ? <Species species={species} /> : <Spinner />}
    </Card>
  );
}
