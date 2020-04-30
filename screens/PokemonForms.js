import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

import { PokemonSprite, Stats, Types } from '../components/Pokemon/';

import SubCard from '../components/Common/SubCard';
import SubCardMultiple from '../components/Common/SubCardMultiple';

export default function PokemonForms({ route }) {
  const { name, url } = route.params;

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
    levelUpMoves: [],
    tmMoves: [],
    eggMoves: [],
    isFavorite: false,
  });

  useEffect(() => {
    getPokemonData();
  }, [name]);

  /**
   * function to parse the pokemon data
   */
  const getPokemonData = () => {
    API.getPokemonData(name)
      .then(res => {
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

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
          abilities: res.data.abilities.map(ability => ability.ability.name).reverse(),
          items: res.data.held_items.map(item => item.item.name),
          types: res.data.types.map(type => type.type.name),
          evs: res.data.stats
            .filter(element => (element.effort > 0 ? true : false))
            .map(element => `${element.effort} ${element.stat.name.replace(/-/g, ' ')}`)
            .reverse(),
          stats: { hp, attack, defense, speed, specialAttack, specialDefense },
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <PokemonSprite
          name={pokemonData.name}
          spriteDefault={pokemonData.spriteDefault}
          spriteShiny={pokemonData.spriteShiny}
        />

        <Types types={pokemonData.types} />

        <Stats stats={pokemonData.stats} />

        <SubCardMultiple
          header={'abilities'}
          data={pokemonData.abilities}
          capitalize
          touchable
          navigateTo={'Abilities'}
        />

        <SubCardMultiple
          header={'held items'}
          data={pokemonData.items}
          capitalize
          touchable
          navigateTo={'Items'}
        />

        <SubCard header={'height'} data={`${pokemonData.height} in.`} />

        <SubCard header={'weight'} data={`${pokemonData.weight} lbs.`} />

        <SubCard header={'experience'} data={pokemonData.baseExperience} />

        <SubCardMultiple header={'effort values'} data={pokemonData.evs} capitalize />
      </ScrollView>
    </View>
  );
}
