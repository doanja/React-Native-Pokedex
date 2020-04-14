import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SubCard({ header, data, capitalize, touchable, onPress }) {
  const headerStyle = [globalStyles.headerText];
  const bodyStyle = [
    globalStyles.cardText,
    capitalize && styles.capitalize,
    touchable && globalStyles.cardItem,
  ];

  return touchable ? (
    <Card>
      <CardHeader>
        <Text style={headerStyle}>{header}</Text>
      </CardHeader>

      <TouchableOpacity onPress={onPress}>
        <Text style={bodyStyle}>{!data ? '-' : data}</Text>
      </TouchableOpacity>
    </Card>
  ) : (
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
