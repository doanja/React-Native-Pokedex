import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';

export default function FavoriteIcon({ saved, setSaved }) {
  return saved ? (
    <TouchableHighlight
      style={styles.icons}
      underlayColor={colors.primary}
      onPress={() => setSaved(!saved)}>
      <MaterialIcons name='delete' size={25} />
    </TouchableHighlight>
  ) : (
    <TouchableHighlight
      style={styles.icons}
      underlayColor={colors.primary}
      onPress={() => setSaved(!saved)}>
      <MaterialIcons name='save' size={25} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  icons: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 4,
    zIndex: 1,
    padding: 12,
    borderRadius: 100,
    bottom: 20,
    right: 20,
  },
});
