import React from 'react';
import { StyleSheet, View, Text, Alert, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Button from '../components/Button';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>

      <Image source={require('../assets/logo.png')} style={styles.image} />

      <View style={styles.buttonGroup}>
        <Button
          text='Login'
          // TODO: render modal
          onPress={() => Alert.alert('Login Button Pressed')}
        />
        <Button
          text='Signup'
          // TODO: render modal
          onPress={() => Alert.alert('Signup Button Pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
    justifyContent: 'flex-end'
  },
  image: {
    alignSelf: 'center',
    marginTop: '40%'
  }
});
