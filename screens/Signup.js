import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import SignupContainer from '../components/Auth/SignupContainer';
import API from '../services/authAPI';

export default function Signup() {
  const signup = values => {
    const { email, password } = values;
    console.log('email :>> ', email);
    console.log('password :>> ', password);
    // TODO: test this
    // API.register(email, password)
    //   .then(res => {
    // // TODO: check if email = confirmed email, etc
    //     console.log(res);
    // // TODO: redirect to to login
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <SignupContainer signup={signup} />
      </View>
    </TouchableWithoutFeedback>
  );
}
