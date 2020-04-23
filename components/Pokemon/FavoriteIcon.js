import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function FavoriteIcon() {
  return (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => console.log('TODO: save pokemon')}>
        <FontAwesome5 name='save' size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    backgroundColor: '#ee1515',
    position: 'absolute',
    elevation: 4,
    zIndex: 1,
    padding: 8,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 1,
    top: Dimensions.get('window').width * 1.4,
    left: Dimensions.get('window').width / 1.4,
  },
});
