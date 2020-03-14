import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../constants/theme';

export default function CardHeader({ text }) {
  return (
    <View style={styles.cardHeader}>
      <Text styles={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    width: '100%',
    height: 25,
    backgroundColor: colors.tertiary,
    alignItems: 'center'
  },
  text: {
    color: colors.white,
    textTransform: 'capitalize'
  }
});
