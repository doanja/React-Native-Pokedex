import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';

export default function SubCardMultiple({ header, data }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{header}</Text>
      </CardHeader>

      {data.length ? (
        data.map(item => (
          <View key={item.name}>
            <Text style={globalStyles.cardItem}>{item.name}</Text>
          </View>
        ))
      ) : (
        <View>
          <Text style={globalStyles.cardText}>None</Text>
        </View>
      )}
    </Card>
  );
}
