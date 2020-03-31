import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../constants/theme';

export default function CardHeader({ children, touchable, onPress, style }) {
  const headerStyles = [styles.cardHeader, style];
  return touchable ? (
    <TouchableOpacity style={headerStyles} onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  ) : (
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
