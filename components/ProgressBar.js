import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { colors } from '../constants/theme';

export default function ProgressBar({ amount, label }) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textLabel}> {label}: </Text>
        <View style={styles.progressBar}>
          <Text style={styles.textStat}>{amount}</Text>
          {amount ? (
            <Animated.View
              style={([StyleSheet.absoluteFill], { backgroundColor: colors.gray, width: amount })}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6
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
  textLabel: {
    fontWeight: 'bold',
    color: colors.black
  },
  textStat: {
    flexDirection: 'column',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
    fontWeight: 'bold',
    color: colors.black,
    left: '45%'
  }
});
