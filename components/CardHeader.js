import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../constants/theme';

export default function CardHeader({ children }) {
  return (
    <View style={styles.cardHeader}>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    width: '100%',
    height: 25,
    backgroundColor: colors.black,
    alignItems: 'center'
  }
});
