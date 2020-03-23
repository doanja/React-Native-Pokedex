import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default function ProgressBar({ amount, label }) {
  return (
    <View style={styles.container}>
      <Text> {label}: </Text>

      <View style={styles.progressBar}>
        <Text styles={styles.text}>{amount}</Text>
        <Animated.View
          style={([StyleSheet.absoluteFill], { backgroundColor: '#777', width: amount })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8
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
    // flexDirection: 'column',
    // alignSelf: 'center',
    color: 'red'
  }
});
