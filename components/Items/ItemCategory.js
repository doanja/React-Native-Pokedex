import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import Spinner from '../Spinner';

export default function ItemCategory({ category }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Category</Text>
      </CardHeader>

      {category ? (
        <View>
          <Text style={[globalStyles.cardText, { textTransform: 'capitalize' }]}>{category}</Text>
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
