import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import TypesContainer from '../components/Types/TypesContainer';

export default function Types({ route }) {
  const { name } = route.params;

  const [species, setSpecies] = useState([]);
  // TODO: display these
  const [typeData, setTypeData] = useState({
    doubleDamageFrom: [],
    doubleDamageTo: [],
    halfDamageFrom: [],
    halfDamageTo: [],
    noDamageFrom: [],
    noDamageTo: [],
    moves: [],
  });

  useEffect(() => {
    if (name) getTypeData();
  }, [name]);

  const getTypeData = () => {
    API.getTypeData(name)
      .then(res => {
        let species = [];

        species = res.data.pokemon.map(pokemon => {
          return {
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
            id: pokemon.pokemon.url.split('/')[pokemon.pokemon.url.split('/').length - 2],
          };
        });

        // sort pokemon by their id
        species.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));

        setSpecies(species);

        setTypeData({
          doubleDamageFrom: res.data.damage_relations.double_damage_from.map(val => val.name),
          doubleDamageTo: res.data.damage_relations.double_damage_to.map(val => val.name),
          halfDamageFrom: res.data.damage_relations.half_damage_from.map(val => val.name),
          halfDamageTo: res.data.damage_relations.half_damage_to.map(val => val.name),
          noDamageFrom: res.data.damage_relations.no_damage_from.map(val => val.name),
          noDamageTo: res.data.damage_relations.no_damage_to.map(val => val.name),
          moves: res.data.moves,
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <TypesContainer name={name} typeData={typeData} species={species} />
      </ScrollView>
    </View>
  );
}
