import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../images/Spinner';

export default function ItemDescription({ description }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Description</Text>
      </CardHeader>

      {description ? (
        <View>
          <Text style={globalStyles.cardText}>{description}</Text>
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
