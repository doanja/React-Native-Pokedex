import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import EggGroupsContainer from '../components/EggGroups/EggGroupsContainer';

export default function EggGroups({ route }) {
  const { url } = route.params;
  const groupName = url.split('/')[url.split('/').length - 1];
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getEggGroupData();
  }, [url]);

  const getEggGroupData = () => {
    API.getEggData(groupName)
      .then(res => {
        let species = [];

        res.data.pokemon_species.forEach(pokemon => {
          let id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
          species.push({ name: pokemon.name, url: pokemon.url, id });
        });

        // sort pokemon by their id
        species.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));

        setSpecies(species);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <EggGroupsContainer groupName={groupName} species={species} />
      </ScrollView>
    </View>
  );
}
