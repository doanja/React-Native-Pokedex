import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function EffortValues({ evs }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Effort Values</Text>
      </CardHeader>

      {evs ? (
        evs.map(ev => (
          <View key={ev}>
            <Text style={[globalStyles.cardText, { textTransform: 'capitalize' }]}>{ev}</Text>
          </View>
        ))
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
