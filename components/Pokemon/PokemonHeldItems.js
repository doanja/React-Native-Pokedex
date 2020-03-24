import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import { colors, sizes } from '../../constants/theme';

export default function PokemonHeldItems({ items }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Items</Text>
      </CardHeader>
      {items.length > 0 ? (
        items.map(item => (
          <View key={item.name}>
            <TouchableOpacity>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View>
          <TouchableOpacity>
            <Text style={styles.item}>None</Text>
          </TouchableOpacity>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  item: {
    color: colors.black,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderRadius: sizes.radius,
    margin: 3,
    padding: 10,
    textAlign: 'center',
    textTransform: 'capitalize'
  }
});
