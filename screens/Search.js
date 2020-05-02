import React from 'react';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import Button from '../components/Button';

export default function Search(props) {
  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        placeholder='Pokemon Name'
        // onChangeText={props.handleChange('title')}
        // value={props.values.title}
        // onBlur={props.handleBlur('title')}
      />
      {/* <Text style={theme.errorText}>{props.touched.title && props.errors.title}</Text> */}
      {/* TODO: implement search feature */}
      <Button text='Search' onPress={() => Alert.alert('Search Button Pressed')} />
    </View>
  );
}
