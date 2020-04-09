import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';
import Species from './Species';

export default function EggGroupsContainer({ groupName, species }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{groupName}</Text>
      </CardHeader>

      <Species species={species} />
    </Card>
  );
}
