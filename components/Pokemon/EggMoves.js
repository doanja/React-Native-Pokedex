import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function EggMoves({ moveset }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <View>
      {/* header */}
      <TouchableOpacity style={styles.header} onPress={() => setCollapse(!collapse)}>
        <Text style={globalStyles.cardItem}>Egg Moves</Text>
      </TouchableOpacity>

      {/* move information */}
      {collapse ? null : (
        <View>
          {moveset.map(move => (
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
  );
}

const styles = StyleSheet.create({
  header: {
    width: '33%'
  },

  text: {
    color: 'white'
  }
});
