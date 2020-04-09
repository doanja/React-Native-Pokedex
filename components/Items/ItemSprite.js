import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Card } from '../../components';

export default function ItemSprite({ spriteUri }) {
  return (
    <Card>
      <View style={styles.icons}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => setIsSpriteDefault(!isSpriteDefault)}>
          {spriteUri ? (
            <Image
              style={styles.image}
              source={{
                uri: spriteUri,
              }}
            />
          ) : null}
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '50%',
  },
  image: {
    width: '40%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  icons: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
});
