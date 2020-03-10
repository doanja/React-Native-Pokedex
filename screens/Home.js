import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import Button from '../components/Button';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Button
        text='Login'
        // TODO: render modal
        onPress={() => Alert.alert('Login Button Pressed')}
        style={styles.button}
      />

      <Button
        text='Signup'
        // TODO: render modal
        onPress={() => Alert.alert('Signup Button Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});
