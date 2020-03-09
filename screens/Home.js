import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { theme } from '../constants/theme';

export default function Home() {
  return (
    <View style={theme.container}>
      <Text>Home Screen</Text>
      <Button
        title='Login'
        color='lightblue'
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Button
        title='Signup'
        color='lightblue'
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
}
