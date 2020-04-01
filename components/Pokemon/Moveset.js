import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Moveset({ moveset }) {
  const [collapse, setCollapse] = useState(true);
  const [currentMoveset, setCurrentMoveset] = useState('');

  const handleClick = moveset => {
    currentMoveset === moveset ? setCollapse(!collapse) : setCurrentMoveset(moveset);
  };

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Moveset</Text>
      </CardHeader>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleClick(moveset.levelUpMoves);
          }}>
          <Text style={globalStyles.cardItem}>Lv Up Moves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleClick(moveset.tmMoves);
          }}>
          <Text style={globalStyles.cardItem}>TM Moves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleClick(moveset.eggMoves);
          }}>
          <Text style={globalStyles.cardItem}>Egg Moves</Text>
        </TouchableOpacity>
      </View>

      <View>
        {/* move information */}
        {collapse ? null : (
          <View>
            {currentMoveset.map(move => (
              <View key={move.move_name}>
                {/* TODO: add onPress event */}
                <TouchableOpacity>
                  <Text style={globalStyles.cardItem}>{move.move_name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderRadius: 2
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 1
  }
});
