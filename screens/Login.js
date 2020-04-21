import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import LoginContainer from '../components/Login/LoginContainer';
// import API from '../services/authAPI';

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <LoginContainer />
      </View>
    </TouchableWithoutFeedback>
  );
}
