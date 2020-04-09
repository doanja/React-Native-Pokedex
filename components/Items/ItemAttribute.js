import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function ItemAttribute({ attributes }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Attribute</Text>
      </CardHeader>

      <View>
        <Text style={globalStyles.cardText}>
          {!attributes
            ? '-'
            : attributes.map(attribute => {
                return <p key={attribute.name}>{attribute.name}</p>;
              })}
        </Text>
      </View>
    </Card>
  );
}
