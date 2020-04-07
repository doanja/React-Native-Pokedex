import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function HiddenAbility({ learntBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Hidden Ability</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>test</Text>
      </View>
    </Card>
  );
}
