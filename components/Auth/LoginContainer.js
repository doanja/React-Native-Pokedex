import React from 'react';
import { View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, Button, Text } from '..';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function LoginContainer({ login }) {
  const navigation = useNavigation();
  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8), // TODO: check backend for this
  });

  return (
    <Card
      style={{
        padding: 15,
        flex: 0,
        backgroundColor: '#f0f0f0',
      }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          login(values);
          actions.resetForm();
        }}>
        {props => (
          <View>
            <Text semibold>Email Address</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Email Address'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              onBlur={props.handleBlur('email')}
            />

            {props.errors.email ? (
              <Text style={globalStyles.errorText}>
                {props.touched.email && props.errors.email}
              </Text>
            ) : null}
            <Text semibold>Password</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              onBlur={props.handleBlur('password')}
              secureTextEntry
            />
            {props.errors.password ? (
              <Text style={globalStyles.errorText}>
                {props.touched.password && props.errors.password}
              </Text>
            ) : null}
            <Button gradient endColor='#d16456' onPress={props.handleSubmit}>
              <Text center semibold white>
                Login
              </Text>
            </Button>
            <Button
              shadow
              onPress={() => {
                // console.log('to signup');
                navigation.navigate('Signup');
              }}>
              <Text center semibold>
                Not enrolled? Signup now.
              </Text>
            </Button>
          </View>
        )}
      </Formik>
    </Card>
  );
}
