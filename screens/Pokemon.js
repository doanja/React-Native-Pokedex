import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';
import { Card, CardHeader } from '../components';
import PokemonSprite from '../components/Pokemon/PokemonSprite';
import ProgressBar from '../components/ProgressBar';
import PokemonAbilities from '../components/Pokemon/PokemonAbilities';
import PokemonHeldItems from '../components/Pokemon/PokemonHeldItems';

export default function Pokemon({ route }) {
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
    getPokemonData();
  }, [name]);

  useEffect(() => {
    if (pokemonData.pokemonId) {
      getSpeciesData();
    }
  }, [pokemonData.pokemonId]);

  useEffect(() => {
    if (speciesData.evolutionUrl) {
      getEvolutionData(speciesData.evolutionUrl);
    }
  }, [speciesData.evolutionUrl]);

  const getPokemonData = () => {
    API.getPokemonData(name)
      .then(res => {
        const abilities = [];
        const items = [];
        const types = [];
        const evs = [];
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        res.data.abilities.forEach(ability => {
          abilities.push({
            name: ability.ability.name.replace(/-/g, ' '),
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
          spriteShiny: res.data.sprites.front_shiny,
          height: Math.round((res.data.height * 0.328084 + 0.0001) * 100) / 100,
          weight: Math.round((res.data.weight * 0.220462 + 0.0001) * 100) / 100,
          abilities: abilities.reverse(),
          items,
          types,
          evs,
          stats: { hp, attack, defense, speed, specialAttack, specialDefense }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getSpeciesData = () => {
    API.getSpeciesData(pokemonData.pokemonId)
      .then(res => {
        const eggGroups = [];
        let description = '';
        const varieties = [];

        res.data.egg_groups.forEach(group => {
          eggGroups.push({ name: group.name, url: group.url });
        });

        res.data.flavor_text_entries.filter(element => {
          if (element.language.name === 'en') {
            description = element.flavor_text;
          }
        });

        res.data.varieties.filter(variety => {
          if (!variety.is_default) {
            varieties.push({
              name: variety.pokemon.name,
              url: variety.pokemon.url
            });
          }
        });

        getVarietySprite(varieties);

        setSpeciesData({
          pokemonId: res.data.id,
          baseHappiness: res.data.base_happiness,
          gender: {
            genderRatio: res.data.gender_rate,
            genderRatioFemale: res.data.gender_rate * 12.5,
            genderRatioMale: 12.5 * (8 - res.data.gender_rate)
          },
          growthRate: { name: res.data.growth_rate.name, url: res.data.growth_rate.url },
          habitat:
            res.data.habitat === null
              ? { name: 'None' }
              : { name: res.data.habitat.name, url: res.data.habitat.url },
          catchRate: Math.round((100 / 255) * res.data.capture_rate),
          hatchSteps: 255 * (res.data.hatch_counter + 1),
          eggGroups,
          description,
          shape: { name: res.data.shape.name, url: res.data.shape.url },
          evolutionUrl: res.data.evolution_chain.url
        });

        // console.log('speciesData :', speciesData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getEvolutionData = url => {
    API.getEvolutionData(url)
      .then(res => {
        const evolutions = []; // array of objects containing each evolution
        getEvolutionLine(res.data.chain, evolutions);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getEvolutionLine = (evolutionsArr, resultArr) => {
    if (evolutionsArr.evolves_to.length === 0) {
      API.getEvolutionSpecies(evolutionsArr.species.url)
        .then(res => {
          return API.getPokemonData(res.data.id);
        })
        .then(res => {
          resultArr.push({
            name: evolutionsArr.species.name,
            url: evolutionsArr.species.url,
            sprite: res.data.sprites.front_default,
            method: getEvolutionMethod(evolutionsArr.evolution_details[0])
          });

          setSpeciesData({ ...speciesData, evolutions: resultArr });
          // this.props.setFirstEvolution(this.state.evolutions[0]);

          return;
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      API.getEvolutionSpecies(evolutionsArr.species.url)
        .then(res => {
          return API.getPokemonData(res.data.id);
        })
        .then(res => {
          resultArr.push({
            name: evolutionsArr.species.name,
            url: evolutionsArr.species.url,
            sprite: res.data.sprites.front_default,
            method: getEvolutionMethod(evolutionsArr.evolution_details[0])
          });
          evolutionsArr.evolves_to.forEach(evolution => {
            return getEvolutionLine(evolution, resultArr);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const getEvolutionMethod = methods => {
    const methodsArr = [];
    // if methods is empty...
    if (!methods) {
      return [];
    }

    // for each method in methods
    else {
      for (const method in methods) {
        if (methods[method]) {
          const name = method.replace(/_/g, ' ');
          const condition = methods[method];
          methodsArr.push({ name, condition });
        }
      }
      return methodsArr;
    }
  };

  const getVarietySprite = varieties => {
    varieties.forEach(variety => {
      API.getVarietySprites(variety.url)
        .then(res => {
          variety.sprite = res.data.sprites.front_default;
          setSpeciesData({ ...speciesData, varieties });
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <PokemonSprite
          name={name}
          spriteDefault={pokemonData.spriteDefault}
          spriteShiny={pokemonData.spriteShiny}
        />

        <Card>
          <CardHeader>
            <Text style={globalStyles.headerText}>Stats</Text>
          </CardHeader>
          <ProgressBar amount={pokemonData.stats.hp} label={'HP'} />
          <ProgressBar amount={pokemonData.stats.attack} label={'Attack'} />
          <ProgressBar amount={pokemonData.stats.defense} label={'Defense'} />
          <ProgressBar amount={pokemonData.stats.specialAttack} label={'Sp. Atk'} />
          <ProgressBar amount={pokemonData.stats.specialDefense} label={'Sp. Def'} />
          <ProgressBar amount={pokemonData.stats.speed} label={'Speed'} />
        </Card>

        <PokemonAbilities abilities={pokemonData.abilities} />
        <PokemonHeldItems items={pokemonData.items} />
      </ScrollView>
    </View>
  );
}
