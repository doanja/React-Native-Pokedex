import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../images/Spinner';

export default function Happiness({ happiness }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Happiness</Text>
      </CardHeader>
      {happiness ? (
        <View>
          <Text style={globalStyles.cardText}>{happiness}</Text>
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
