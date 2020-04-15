import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function SubCard({ header, data, capitalize, touchable, onPress }) {
  const headerStyle = [globalStyles.headerText];
  const bodyStyle = [
    globalStyles.cardText,
    capitalize && styles.capitalize,
    touchable && globalStyles.cardItem,
  ];

  return (
    <Card>
      <CardHeader>
        <Text style={headerStyle}>{header}</Text>
      </CardHeader>

      {touchable ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={bodyStyle}>{!data ? '-' : data}</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={bodyStyle}>{!data ? '-' : data}</Text>
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
