import React from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { theme } from '../constants/theme';

export default function Search(props) {
  return (
    <View style={theme.container}>
      <TextInput
        style={theme.input}
        placeholder='Pokemon Name'
        // onChangeText={props.handleChange('title')}
        // value={props.values.title}
        // onBlur={props.handleBlur('title')}
      />
      {/* <Text style={theme.errorText}>{props.touched.title && props.errors.title}</Text> */}

      {/* <FlatButton text='submit' onPress={props.handleSubmit} /> */}
    </View>
  );
}
