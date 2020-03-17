import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, Dimensions } from 'react-native';
import { colors } from '../constants/theme';
import Card from '../components/Card';
import CardHeader from './CardHeader';

export default function PokemonCard({ name, url, onPress }) {
  const [imageUrl, setImageUrl] = useState('');
  const [pokemonId, setPokemonId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPokemonId(url.split('/')[url.split('/').length - 2]);
    setImageUrl(
      `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
    );
  }, [pokemonId]);

  return (
    <Card onPress={onPress}>
      <CardHeader>
        <Text style={styles.text}>{name}</Text>
      </CardHeader>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '60%',
    height: Dimensions.get('window').width / 4,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  text: {
    color: colors.white,
    textTransform: 'capitalize'
  }
});
