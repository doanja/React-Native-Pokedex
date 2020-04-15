import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';

export default function SubCard({ header, data, capitalize, touchable, navigateTo }) {
  const navigation = useNavigation();

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
        <TouchableOpacity
          key={item}
          onPress={() =>
            navigation.navigate(navigateTo, {
              name: data,
            })
          }>
          <Text style={bodyStyle}>{!data ? '-' : data}</Text>
        </TouchableOpacity>
      ) : (
        <View>
          {!data ? (
            <Text style={globalStyles.cardText}>{'-'}</Text>
          ) : (
            <Text style={bodyStyle}>{data}</Text>
          )}
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
