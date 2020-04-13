import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function Weight({ weight }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Weight</Text>
      </CardHeader>
      {weight ? (
        <View>
          <Text style={globalStyles.cardText}>{weight} lbs.</Text>
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
