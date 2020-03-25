import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Evolutions({ evolutions }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Evolutions</Text>
      </CardHeader>
      {evolutions.map(evolution => (
        <View key={evolution.name}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: evolution.sprite
              }}
            />
          </TouchableOpacity>
          {/* {evolution.method.length === 0
            ? null
            : evolution.method.map(method => {
                return (
                  <Text key={method.name}>{`${method.name}: ${
                    typeof method.condition === 'object' ? method.condition.name : method.condition
                  }`}</Text>
                );
              })} */}
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '50%',
    borderWidth: 0.5,
    borderColor: 'crimson',
    alignSelf: 'center',
    padding: 10,
    margin: 10
  },
  image: {
    width: '50%',
    height: Dimensions.get('window').width / 4,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
