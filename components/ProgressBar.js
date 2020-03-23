import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default function ProgressBar({ amount, label }) {
  return (
    <View style={styles.container}>
      {/* <Text>Loading…..</Text> */}
      <View style={styles.progressBar}>
        <Animated.View
          style={([StyleSheet.absoluteFill], { backgroundColor: 'blue', width: amount })}
        />

        <Text styles={styles.text}>
          {label}: {amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    // backgroundColor: '#ecf0f1',
    padding: 8
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
    // alignContent: 'center',
    // alignSelf: 'center',
    // alignItems: 'center'
  },
  text: {
    // flexDirection: 'column',
    // alignSelf: 'center',
    // color: 'red'
  }

  //   container: {
  //     flex: 1,
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     paddingTop: 40,
  //     backgroundColor: '#ecf0f1',
  //     padding: 8
  //   },
  //   progressBar: {
  //     flexDirection: 'row',
  //     height: 20,
  //     width: '100%',
  //     backgroundColor: 'white',
  //     borderColor: '#000',
  //     borderWidth: 2,
  //     borderRadius: 5
  //   }
});
