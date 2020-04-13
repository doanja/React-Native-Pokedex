import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function HatchSteps({ hatchSteps }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Hatch Steps</Text>
      </CardHeader>

      {hatchSteps ? (
        <View>
          <Text style={globalStyles.cardText}>{hatchSteps}</Text>
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
