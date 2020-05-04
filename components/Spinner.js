import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Spinner() {
  return <Image style={styles.tinyLogo} source={require('../assets/spinner.gif')} />;
}

const styles = StyleSheet.create({
  tinyLogo: { height: 50, width: 50, alignSelf: 'center' },
});
