import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { sizes } from '../constants/theme';

export default function Card({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
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
    height: Dimensions.get('window').width / 2
  }
});
