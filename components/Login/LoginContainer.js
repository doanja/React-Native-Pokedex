import React from 'react';
import { View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, Button, Text } from '../';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function LoginContainer() {
  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8), // TODO: check backend for this
  });

  return (
    <Card style={{ padding: 15 }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          // TODO: login(values);
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
              //   onBlur={props.handleBlur('title')}
            />
            {/* <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text> */}
            <Text semibold>Password</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              //   onBlur={props.handleBlur('body')}
              secureTextEntry
            />

            <Button gradient onPress={props.handleSubmit}>
              <Text center semibold white>
                Login
              </Text>
            </Button>
          </View>
        )}
      </Formik>
    </Card>
  );
}
