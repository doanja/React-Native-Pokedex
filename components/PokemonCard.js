import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function PokemonCard({ name, url }) {
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
    <View>
      <Text style={(globalStyles.titleText, styles.cardHeader)}>{name}</Text>

      <Image
        style={{ width: '25%', height: 75 }}
        source={{
          uri: imageUrl
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    backgroundColor: 'lightblue',
    width: '100%'
  }
});
