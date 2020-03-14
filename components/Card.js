import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '50%',
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
