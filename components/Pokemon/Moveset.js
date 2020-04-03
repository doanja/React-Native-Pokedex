import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Moveset({ levelUpMoves, tmMoves, eggMoves }) {
  const [collapse, setCollapse] = useState(true);
  const [currentMoveset, setCurrentMoveset] = useState('');

  useEffect(() => {
    setCollapse(true);
    setCurrentMoveset('');
    // console.log('eggMoves :', eggMoves);
  }, [levelUpMoves, tmMoves, eggMoves]);

  const handleClick = (moveset) => {
    if (currentMoveset === moveset) {
      setCollapse(!collapse);
    } else if (!collapse && currentMoveset !== moveset) {
      setCurrentMoveset(moveset);
    } else {
      setCollapse(false);
      setCurrentMoveset(moveset);
    }
  };

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Movesets</Text>
      </CardHeader>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleClick(levelUpMoves);
          }}>
          <Text style={globalStyles.cardItem}>Lv Up Moves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleClick(tmMoves);
          }}>
          <Text style={globalStyles.cardItem}>TM Moves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleClick(eggMoves);
          }}>
          <Text style={globalStyles.cardItem}>Egg Moves</Text>
        </TouchableOpacity>
      </View>

      <View>
        {/* move information */}
        {collapse ? null : (
          <View>
            {currentMoveset.map((move, index) => (
              <View key={index}>
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
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
