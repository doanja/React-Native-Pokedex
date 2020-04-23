import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import LoginContainer from '../components/Auth/LoginContainer';
import API from '../services/authAPI';

export default function Signup() {
  const signup = values => {
    const { email, password } = values;
    console.log('email :>> ', email);
    console.log('password :>> ', password);
    // TODO: test this
    // API.register(email, password)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <LoginContainer login={login} signup={signup} />
      </View>
    </TouchableWithoutFeedback>
  );
}
