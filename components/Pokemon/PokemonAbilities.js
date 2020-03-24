import React from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';

import { Card, CardHeader } from '../../components';

export default function PokemonAbilities({ abilities }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Abilities</Text>
      </CardHeader>
      {abilities.map(ability => (
        <View>
          <TouchableOpacity>
            <Text style={styles.button}>{ability.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    padding: 15,
    borderColor: 'black',
    textAlign: 'center',
    textTransform: 'capitalize',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
