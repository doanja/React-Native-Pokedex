import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

export default function Abilities({ route }) {
  const { name } = route.params;

  const [data, setData] = useState({ effectEntries: '', name: '', learntBy: '' });

  useEffect(() => {
    getAbilityData();
  }, [name]);

  const getAbilityData = () => {
    API.getAbilityData(name)
      .then((res) => {
        const learntBy = [];

        console.log('res.data :', res.data);

        res.data.pokemon.forEach((pokemon) => {
          axios
            .get(pokemon.pokemon.url)
            .then((res) => {
              learntBy.push({
                hidden: pokemon.is_hidden,
                name: pokemon.pokemon.name,
                url: pokemon.pokemon.url,
                imageUrl: res.data.sprites.front_default,
                id: res.data.id,
              });

              // sort pokemon by id
              learntBy.sort((a, b) => (a.id > b.id ? 1 : -1));

              setData({
                learnableBy: learntBy,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });

        setData({
          ...data,
          effect_entries: res.data.effect_entries[0].effect,
          name: res.data.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <Text>hello</Text>
    </ScrollView>
  );
}
