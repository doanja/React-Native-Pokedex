import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import { sizes, colors } from '../../constants/theme';
import Spinner from '../Spinner';

export default function Types({ types }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Type</Text>
      </CardHeader>
      {types ? (
        <View style={styles.container}>
          {types.map(type => (
            <TouchableOpacity
              style={[styles.badge, { backgroundColor: `#${TYPE_COLORS[type]}` }]}
              key={type}
              onPress={() => {
                navigation.navigate('Types', {
                  name: type,
                });
              }}>
              <Text style={styles.text}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '82351D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'b8a038',
  steel: 'B5B5C3',
  water: '3295F6',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  badge: {
    flex: 1,
    padding: 1,
    width: 10,
    height: 30,
    borderRadius: sizes.radius,
    margin: 3,
  },
  text: {
    margin: 3,
    textTransform: 'capitalize',
    color: colors.white,
    textAlign: 'center',
  },
});
