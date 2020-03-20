import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, Dimensions } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function PokemonSprite({ name, spriteDefault, spriteShiny }) {
  const [isSpriteDefault, setIsSpriteDefault] = useState(true);
  const [spriteUri, setSpriteUri] = useState(spriteDefault);

  useEffect(() => {
    isSpriteDefault ? setSpriteUri(spriteDefault) : setSpriteUri(spriteShiny);
  }, [isSpriteDefault]);

  return (
    <Card touchable onPress={() => setIsSpriteDefault(!isSpriteDefault)}>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>
      <Image
        style={styles.image}
        source={{
          uri: spriteUri
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '40%',
    height: Dimensions.get('window').width / 4,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});
