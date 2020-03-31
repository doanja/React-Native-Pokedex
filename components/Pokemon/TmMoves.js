import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { FontAwesome } from '@expo/vector-icons';
import { Card, CardHeader } from '../../components';

export default function TmMoves({ moveset }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <Card>
      <CardHeader touchable style={styles.header} onPress={() => setCollapse(!collapse)}>
        <View style={styles.icon}>
          {collapse ? (
            <FontAwesome name='plus' size={24} color='white' />
          ) : (
            <FontAwesome name='minus' size={24} color='white' />
          )}
        </View>

        <Text style={styles.text} onPress={() => setCollapse(!collapse)}>
          {' '}
          TM Moves
        </Text>
      </CardHeader>
      {collapse ? null : (
        <View>
          <TouchableOpacity>
            <Text style={globalStyles.cardItem}>Move Name</Text>
          </TouchableOpacity>
          {moveset.tmMoves.map(move => (
            <View key={move.name}>
              {/* TODO: add onPress event */}
              <TouchableOpacity>
                <Text style={globalStyles.cardItem}>{move.move_name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    // alignSelf: 'flex-start'
  },
  text: {
    // alignSelf: 'center',
    color: 'red'
  }
});
