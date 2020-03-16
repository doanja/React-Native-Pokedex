import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function Card({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '40%',
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6
  }
});
