import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, Dimensions } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function PokemonCard({ name, url, onPress, style }) {
  const [imageUrl, setImageUrl] = useState('');
  const [pokemonId, setPokemonId] = useState('');

  const cardStyle = [styles.image, style];

  useEffect(() => {
    setPokemonId(url.split('/')[url.split('/').length - 2]);
    setImageUrl(
      `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
    );
  }, [pokemonId]);

  return (
    <Card touchable onPress={onPress}>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>
      {imageUrl ? (
        <Image
          style={cardStyle}
          source={{
            uri: imageUrl,
          }}
        />
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: Dimensions.get('window').width / 4,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
