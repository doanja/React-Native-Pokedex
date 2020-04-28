import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, Button, Text } from '..';
import { Formik } from 'formik';
import * as yup from 'yup';
import { alertMsg } from '../../constants/helper';

export default function SignupContainer({ signup }) {
  const checkValues = values => {
    const { email, confirmEmail, password, confirmPassword } = values;

    if (email !== confirmEmail) {
      alertMsg('There was a problem with your email address.', 'Emails addresses must match');
      return false;
    } else if (password !== confirmPassword) {
      alertMsg('There was a problem with your password.', 'Passwords must match.');
      return false;
    }

    return true;
  };

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    confirmEmail: yup.string().required().email(),
    password: yup.string().required().min(8), // TODO: check backend for this
    confirmPassword: yup.string().required().min(8), // TODO: check backend for this
  });

  return (
    <Card style={styles.card}>
      <Formik
        initialValues={{ email: '', confirmEmail: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (checkValues(values)) {
            signup(values);
            actions.resetForm();
          }
        }}>
        {props => (
          <View>
            {/* email */}
            <View style={{ paddingBottom: 10 }}>
              <Text style={globalStyles.labelText}>Email Address</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Email Address'
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />

              <Text style={globalStyles.errorText}>
                {props.touched.email && props.errors.email}
              </Text>
            </View>

            {/* confirm email */}
            <View style={{ paddingBottom: 10 }}>
              <Text style={globalStyles.labelText}>Confirm Email Address</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Confirm Email Address'
                onChangeText={props.handleChange('confirmEmail')}
                value={props.values.confirmEmail}
                onBlur={props.handleBlur('confirmEmail')}
              />

              <Text style={globalStyles.errorText}>
                {props.touched.confirmEmail && props.errors.confirmEmail}
              </Text>
            </View>

            {/* password */}
            <View style={{ paddingBottom: 10 }}>
              <Text style={globalStyles.labelText}>Password</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
                secureTextEntry
              />

              <Text style={globalStyles.errorText}>
                {props.touched.password && props.errors.password}
              </Text>
            </View>

            {/* confirm password */}
            <View style={{ paddingBottom: 10 }}>
              <Text style={globalStyles.labelText}>Confirm Password</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Confirm Password'
                onChangeText={props.handleChange('confirmPassword')}
                value={props.values.confirmPassword}
                onBlur={props.handleBlur('confirmPassword')}
                secureTextEntry
              />

              <Text style={globalStyles.errorText}>
                {props.touched.confirmPassword && props.errors.confirmPassword}
              </Text>
            </View>

            <Button gradient endColor='#d16456' onPress={props.handleSubmit}>
              <Text center semibold white>
                Signup
              </Text>
            </Button>
          </View>
        )}
      </Formik>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    flex: 0,
    backgroundColor: '#f0f0f0',
  },
});
