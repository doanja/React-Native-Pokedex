import React from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { Button, Text } from '../components';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.textHeader}>Pokedex Home</Text>

      <Image source={require('../assets/logo.png')} style={styles.image} />

      <View style={styles.buttonGroup}>
        <Button gradient onPress={() => navigation.navigate('Login')}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow onPress={() => navigation.navigate('SignUp')}>
          <Text center semibold>
            View Pokedex
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: '10%'
  },
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
