import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

import { AbilityTitle } from '../components/Abilities/index';

export default function Abilities({ route }) {
  const { name } = route.params;

  const [abilityData, setAbilityData] = useState({ effectEntries: '', name: '' });
  const [learntBy, setLearntBy] = useState([]);

  useEffect(() => {
    getAbilityData();
  }, [name]);

  useEffect(() => {
    console.log('abilityData :', abilityData);
  }, [abilityData]);

  const getAbilityData = () => {
    API.getAbilityData(name)
      .then(res => {
        const learntBy = [];

        res.data.pokemon.forEach(pokemon => {
          API.getPokeAPI(pokemon.pokemon.url)
            .then(res => {
              learntBy.push({
                hidden: pokemon.is_hidden,
                name: pokemon.pokemon.name,
                url: pokemon.pokemon.url,
                imageUrl: res.data.sprites.front_default,
                id: res.data.id,
              });

              // sort pokemon by id
              learntBy.sort((a, b) => (a.id > b.id ? 1 : -1));

              setLearntBy(learntBy);
            })
            .catch(err => {
              console.log(err);
            });
        });

        setAbilityData({
          effectEntries: res.data.effect_entries[0].effect,
          name: res.data.name,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <AbilityTitle abilityData={abilityData} learntBy={learntBy} />
      </ScrollView>
    </View>
  );
}
