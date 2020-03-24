import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default function ProgressBar({ amount, label }) {
  return (
    <View>
      <View style={styles.container}>
        <Text> {label}: </Text>

        <View style={styles.progressBar}>
          <Text style={styles.text}>{amount}</Text>
          {amount ? (
            <Animated.View
              style={([StyleSheet.absoluteFill], { backgroundColor: 'crimson', width: amount })}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '80%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    fontWeight: 'bold',
    color: 'black'
  }
});
