import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import SignupContainer from '../components/Auth/SignupContainer';
import API from '../services/authAPI';

export default function Signup() {
  const navigation = useNavigation();

  const alertMsg = (title, message) =>
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ],
      { cancelable: false }
    );

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
