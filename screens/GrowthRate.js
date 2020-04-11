import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import GenericContainer from '../components/Common/GenericContainer';

export default function GrowthRate({ route }) {
  const { name } = route.params;

  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getGrowthRateData();
  }, [name]);

  const getGrowthRateData = () => {
    API.getGrowthRateData(name)
      .then(res => {
        const species = [];

        res.data.pokemon_species.forEach(pokemon => {
          const id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
          species.push({ name: pokemon.name, url: pokemon.url, id });
        });

        // sort pokemon by their id
        species.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));

        setSpecies(species);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <GenericContainer name={name} species={species} />
      </ScrollView>
    </View>
  );
}
