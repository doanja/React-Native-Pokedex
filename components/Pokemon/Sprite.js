import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { Card, CardHeader } from '../../components';

export default function Sprite({ name, spriteDefault, spriteShiny }) {
  const [isSpriteDefault, setIsSpriteDefault] = useState(true);
  const [spriteUri, setSpriteUri] = useState(spriteDefault);

  useEffect(() => {
    isSpriteDefault ? setSpriteUri(spriteDefault) : setSpriteUri(spriteShiny);
  }, [isSpriteDefault, spriteDefault, spriteShiny]);

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>

      <View style={styles.icons}>
        <TouchableOpacity onPress={() => setIsSpriteDefault(!isSpriteDefault)}>
          <MaterialIcons name='chevron-left' size={24} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => setIsSpriteDefault(!isSpriteDefault)}>
          {spriteUri ? (
            <Image
              style={styles.image}
              source={{
                uri: spriteUri
              }}
            />
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsSpriteDefault(!isSpriteDefault)}>
          <MaterialIcons name='chevron-right' size={24} />
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '30%'
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 4,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -30
  },
  icons: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    marginBottom: 30
  }
});
