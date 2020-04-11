import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../images/Spinner';

export default function Height({ height }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Height</Text>
      </CardHeader>

      {height ? (
        <View>
          <Text style={globalStyles.cardText}>{height} in.</Text>
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
