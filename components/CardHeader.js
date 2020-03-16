import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, sizes } from '../constants/theme';

export default function CardHeader({ children }) {
  return (
    <View style={styles.cardHeader}>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: colors.black,
    alignItems: 'center'
  }
});
