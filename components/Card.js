import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { sizes } from '../constants/theme';

export default function Card({ children, touchable, onPress, style }) {
  const cardStyles = [styles.card, style];

  return touchable ? (
    <TouchableOpacity style={cardStyles} onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  ) : (
    <View style={cardStyles}>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: sizes.radius,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    flex: 1,
    margin: 1,
  },
});
