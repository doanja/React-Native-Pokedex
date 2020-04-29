import React, { useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import LoginContainer from '../components/Auth/LoginContainer';
import API from '../services/authAPI';
import { alertMsg, setToken } from '../constants/helper';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginStatus, setAuthToken } from '../redux';

export default function Login() {
  const navigation = useNavigation();

  // redux hooks
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn ? navigation.navigate('Favorites') : navigation.navigate('Login');
  }, []);

  const login = values => {
    const { email, password } = values;

    API.login(email, password)
      .then(res => {
        try {
          // store the token and userId in local storage
          setToken('token', res.data.token);

          // set the token in headers
          axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

          // dispatch action to set auth token
          dispatch(setAuthToken(res.data.token));

          // dispatch action to set login status to true
          dispatch(setLoginStatus(true));

          navigation.navigate('Favorites');
        } catch (err) {
          console.log(err);
        }
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
