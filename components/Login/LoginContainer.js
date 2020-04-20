import React from 'react';
import { View, TextInput } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';
import { Button, Text } from '../';

export default function LoginContainer({}) {
  return (
    <Card style={{ padding: 15 }}>
      <View>
        <Text semibold>Email Address</Text>
        <TextInput
          style={globalStyles.input}
          placeholder='Email Address'
          //   onChangeText={props.handleChange('title')}
          //   value={props.values.title}
          //   onBlur={props.handleBlur('title')}
        />
        {/* <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text> */}
        <Text semibold>Password</Text>
        <TextInput
          style={globalStyles.input}
          placeholder='Password'
          //   onChangeText={props.handleChange('body')}
          //   value={props.values.body}
          //   onBlur={props.handleBlur('body')}
        />

        <Button gradient onPress={() => console.log('TODO: HANDLE SUBMISSION')}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
      </View>
    </Card>
  );
}
