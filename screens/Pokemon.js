import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import PokemonCard from '../components/PokemonCard';

export default function Pokemon({ route }) {
  const { name, url } = route.params;

  const [pokemonData, setPokemonData] = useState({
    pokemonId: '',
    baseExperience: '',
    name: '',
    spriteDefault: '',
    sprite_shiny: '',
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
      speed: ''
    },
    isFavorite: false
  });

  const [speciesData, setSpeciesData] = useState({
    pokemonId: '',
    baseHappiness: '',
    description: '',
    gender: {
      genderRatio: '',
      genderRatioFemale: '',
      genderRatioMale: ''
    },
    catchRate: '',
    growthRate: { name: '', url: '' },
    habitat: {
      name: '',
      url: ''
    },
    hatchSteps: '',
    shape: {
      name: '',
      url: ''
    },
    evolutionUrl: '',
    eggGroups: [],
    evolutions: [],
    varieties: []
  });

  useEffect(() => {
    API.getPokemonData(name)
      .then(res => {
        const abilities = [];
        const items = [];
        const types = [];
        const evs = [];
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        res.data.abilities.forEach(ability => {
          abilities.push({
            name: ability.ability.name,
            url: ability.ability.url
          });
        });

        res.data.held_items.forEach(item => {
          items.push({
            name: item.item.name,
            id: item.item.url.split('/')[url.split('/').length - 2]
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
            evs.push(`${element.effort} ${element.stat.name}`);
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
          sprite_shiny: res.data.sprites.front_shiny,
          height: Math.round((res.data.height * 0.328084 + 0.0001) * 100) / 100,
          weight: Math.round((res.data.weight * 0.220462 + 0.0001) * 100) / 100,
          abilities,
          items,
          types,
          evs,
          stats: { hp, attack, defense, speed, specialAttack, specialDefense }
        });
      })
      .catch(err => {
        console.log(err);
      });

    API.getSpeciesData(pokemonData.pokemonId)
      .then(res => {
        console.log('res.data :', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [name, pokemonData.pokemonId]);

  return (
    <ScrollView style={globalStyles.container}>
      <Card>
        <CardHeader>
          <Text style={globalStyles.headerText}>{name}</Text>
        </CardHeader>
      </Card>
    </ScrollView>
  );
}
