import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function SubCard({ header, data, capitalize }) {
  const headerStyle = [globalStyles.headerText];
  const bodyStyle = [globalStyles.cardText, capitalize && styles.capitalize];

  return (
    <Card>
      <CardHeader>
        <Text style={headerStyle}>{header}</Text>
      </CardHeader>

      <View>
        <Text style={bodyStyle}>{!data ? '-' : data}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  capitalize: {
    textTransform: 'capitalize',
  },
});
