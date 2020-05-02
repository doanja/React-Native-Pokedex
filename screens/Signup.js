import React, { useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import SignupContainer from '../components/Containers/SignupContainer';
import API from '../services/authAPI';
import { alertMsg } from '../constants/helper';

import { useSelector } from 'react-redux';

export default function Signup() {
  const navigation = useNavigation();

  // redux hooks
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  useEffect(() => {
    isLoggedIn ? navigation.navigate('Favorites') : navigation.navigate('Signup');
  }, []);

  const signup = values => {
    const { email, password } = values;

    API.signup(email, password)
      .then(res => {
        navigation.navigate('Login');
      })
      .catch(err => alertMsg('Error', err.response.data.error.message));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <SignupContainer signup={signup} />
      </View>
    </TouchableWithoutFeedback>
  );
}
