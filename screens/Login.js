import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import LoginContainer from '../components/Login/LoginContainer';
// import API from '../services/pokemonAPI';

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <LoginContainer />
    </View>
  );
}
