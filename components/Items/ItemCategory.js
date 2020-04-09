import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function ItemCategory({ category }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Category</Text>
      </CardHeader>

      <View>
        <Text style={[globalStyles.cardText, { textTransform: 'capitalize' }]}>{category}</Text>
      </View>
    </Card>
  );
}
