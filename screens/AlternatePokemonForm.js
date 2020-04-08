import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

import {
  Sprite,
  Stats,
  Abilities,
  HeldItems,
  Height,
  Weight,
  Experience,
  EffortValues,
} from '../components/Pokemon/index';

export default function AlternatePokemonForm({ route }) {
  const { name, url } = route.params;

  const [pokemonId, setPokemonId] = useState();

  const [pokemonData, setPokemonData] = useState({
    pokemonId: '',
    baseExperience: '',
    name: '',
    spriteDefault: '',
    spriteShiny: '',
    weight: '',
    height: '',
    abilities: [],
    items: [],
    moves: [],
    types: [],
    evs: [],
    stats: {
      hp: '',
      attack: '',
      defense: '',
      specialAttack: '',
      specialDefense: '',
      speed: '',
    },
    isFavorite: false,
  });

  useEffect(() => {
    setPokemonId(url.split('/')[url.split('/').length - 2]);
  }, []);

  useEffect(() => {
    if (pokemonId) {
      getPokemonData();
    }
  }, [pokemonId]);

  const getPokemonData = () => {
    API.getPokemonData(pokemonId)
      .then(res => {
        const abilities = [];
        const items = [];
        const types = [];
        const evs = [];
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        res.data.abilities.forEach(ability => {
          abilities.push({
            name: ability.ability.name.replace(/-/g, ' '),
            url: ability.ability.url,
          });
        });

        res.data.held_items.forEach(item => {
          items.push({
            name: item.item.name,
            id: item.item.url.split('/')[url.split('/').length - 2],
          });
        });

        res.data.types.forEach(type => {
          types.push(type.type.name);
        });

        res.data.stats
          .filter(element => {
            if (element.effort > 0) {
              return true;
            }
            return false;
          })
          .map(element => {
            evs.push(`${element.effort} ${element.stat.name.replace(/-/g, ' ')}`);
          });

        res.data.stats.map(stat => {
          switch (stat.stat.name) {
            case 'hp':
              hp = stat.base_stat;
              break;
            case 'attack':
              attack = stat.base_stat;
              break;
            case 'defense':
              defense = stat.base_stat;
              break;
            case 'special-attack':
              specialAttack = stat.base_stat;
              break;
            case 'special-defense':
              specialDefense = stat.base_stat;
              break;
            case 'speed':
              speed = stat.base_stat;
              break;
            default:
              break;
          }
        });

        setPokemonData({
          pokemonId: res.data.id,
          baseExperience: res.data.base_experience,
          name: res.data.name,
          spriteDefault: res.data.sprites.front_default,
          spriteShiny: res.data.sprites.front_shiny,
          height: Math.round((res.data.height * 0.328084 + 0.0001) * 100) / 100,
          weight: Math.round((res.data.weight * 0.220462 + 0.0001) * 100) / 100,
          abilities: abilities.reverse(),
          items,
          types,
          evs: evs.reverse(),
          stats: { hp, attack, defense, speed, specialAttack, specialDefense },
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Sprite
          name={name}
          spriteDefault={pokemonData.spriteDefault}
          spriteShiny={pokemonData.spriteShiny}
        />

        <Stats stats={pokemonData.stats} />

        <Abilities abilities={pokemonData.abilities} />

        <HeldItems items={pokemonData.items} />

        <Height height={pokemonData.height} />

        <Weight weight={pokemonData.weight} />

        <Experience experience={pokemonData.baseExperience} />

        <EffortValues evs={pokemonData.evs} />
      </ScrollView>
    </View>
  );
}
