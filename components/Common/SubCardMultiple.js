import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';

export default function SubCardMultiple({ header, data, capitalize }) {
  const headerStyle = [globalStyles.headerText];
  const bodyStyle = [globalStyles.cardText, capitalize && styles.capitalize];

  return (
    <Card>
      <CardHeader>
        <Text style={headerStyle}>{header}</Text>
      </CardHeader>

      {data.length ? (
        data.map(item => (
          <View key={item.name}>
            <Text style={bodyStyle}>{item.name}</Text>
          </View>
        ))
      ) : (
        <View>
          <Text style={bodyStyle}>None</Text>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  capitalize: {
    textTransform: 'capitalize',
  },
});
