import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function LevelUpMoves({ moveset }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <View>
      {/* header */}
      <TouchableOpacity style={styles.header} onPress={() => setCollapse(!collapse)}>
        <Text style={globalStyles.cardItem}>Lv. Up Moves</Text>
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
    // width: '100%'
    flex: 1
  }
});
