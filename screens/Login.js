import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import LoginContainer from '../components/Auth/LoginContainer';
import API from '../services/authAPI';
import { alertMsg } from '../constants/helper';

export default function Login() {
  const navigation = useNavigation();

  const login = values => {
    const { email, password } = values;

    API.login(email, password)
      .then(res => {
        // TODO: set authroization token in header
        // TODO: update redux store
        console.log('res.data :>> ', res.data.token);
        navigation.navigate('Favorites');
      })
      .catch(err => alertMsg('Error', err.response.data.error.message));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <LoginContainer login={login} />
      </View>
    </TouchableWithoutFeedback>
  );
}
