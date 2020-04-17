import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

import PokemonContainer from '../components/Pokemon/PokemonContainer';

export default function Pokemon({ route }) {
  const { name } = route.params;

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

  const [speciesData, setSpeciesData] = useState({
    pokemonId: '',
    baseHappiness: '',
    description: '',
    gender: {
      genderRatio: '',
      genderRatioFemale: '',
      genderRatioMale: '',
    },
    catchRate: '',
    growthRate: '',
    habitat: '',
    hatchSteps: '',
    shape: '',
    eggGroups: [],
  });

  const [forms, setForms] = useState([]);

  const [evolutionData, setEvolutionData] = useState({
    evolutions: [],
    evolutionUrl: '',
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
    if (evolutionData.evolutionUrl) {
      getEvolutionData(evolutionData.evolutionUrl);
    } else {
      setEvolutionData({
        evolutions: [],
        evolutionUrl: '',
      });
    }
  }, [evolutionData.evolutionUrl]);

  useEffect(() => {
    setForms([]);

    if (pokemonData.pokemonId) {
      getAltForms();
    }
  }, [pokemonData.pokemonId]);

  const getPokemonData = () => {
    API.getPokemonData(name)
      .then(res => {
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';
        const levelUpMoves = [];
        const tmMoves = [];

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

        res.data.moves.forEach(move => {
          move.version_group_details.filter(version => {
            if (version.version_group.name === 'ultra-sun-ultra-moon') {
              if (version.move_learn_method.name === 'level-up') {
                levelUpMoves.push({
                  move_name: move.move.name,
                  level_learned_at: version.level_learned_at,
                  learn_method: version.move_learn_method.name,
                });
              } else if (version.move_learn_method.name === 'machine') {
                tmMoves.push({
                  move_name: move.move.name,
                  level_learned_at: version.level_learned_at,
                  learn_method: version.move_learn_method.name,
                });
              }
            }
          });
        });

        // sort moves my level up, and move name
        levelUpMoves.sort((a, b) =>
          a.level_learned_at > b.level_learned_at
            ? 1
            : a.level_learned_at === b.level_learned_at
            ? a.move_name > b.move_name
              ? 1
              : -1
            : -1
        );

        // sort moves alphabetically
        tmMoves.sort((a, b) => (a.move_name > b.move_name ? 1 : -1));

        setPokemonData({
          pokemonId: res.data.id,
          baseExperience: res.data.base_experience,
          name: res.data.name,
          spriteDefault: res.data.sprites.front_default,
          spriteShiny: res.data.sprites.front_shiny,
          height: Math.round((res.data.height * 0.328084 + 0.0001) * 100) / 100,
          weight: Math.round((res.data.weight * 0.220462 + 0.0001) * 100) / 100,
          abilities: res.data.abilities
            .map(ability => ability.ability.name.replace(/-/g, ' '))
            .reverse(),
          items: res.data.held_items.map(item => item.item.name),
          types: res.data.types.map(type => type.type.name),
          evs: res.data.stats
            .filter(element => (element.effort > 0 ? true : false))
            .map(element => `${element.effort} ${element.stat.name.replace(/-/g, ' ')}`)
            .reverse(),
          stats: { hp, attack, defense, speed, specialAttack, specialDefense },
          levelUpMoves,
          tmMoves,
        });
      })
      .catch(err => console.log(err));
  };

  const getSpeciesData = () => {
    API.getSpeciesData(pokemonData.pokemonId)
      .then(res => {
        const eggGroups = [];
        let description = '';

        res.data.egg_groups.forEach(group => {
          eggGroups.push(group.name);
        });

        res.data.flavor_text_entries.filter(element => {
          if (element.language.name === 'en') {
            description = element.flavor_text;
          }
        });

        setSpeciesData({
          pokemonId: res.data.id,
          baseHappiness: res.data.base_happiness,
          gender: {
            genderRatio: res.data.gender_rate,
            genderRatioFemale: res.data.gender_rate * 12.5,
            genderRatioMale: 12.5 * (8 - res.data.gender_rate),
          },
          growthRate: res.data.growth_rate.name,
          habitat: res.data.habitat === null ? 'None' : res.data.habitat.name,
          catchRate: Math.round((100 / 255) * res.data.capture_rate),
          hatchSteps: 255 * (res.data.hatch_counter + 1),
          eggGroups,
          description,
          shape: res.data.shape.name,
        });

        setEvolutionData({ ...evolutionData, evolutionUrl: res.data.evolution_chain.url });
      })
      .catch(err => console.log(err));
  };

  const getEvolutionData = url => {
    API.getPokeAPI(url)
      .then(res => {
        const evolutions = []; // array of objects containing each evolution
        getEvolutionLine(res.data.chain, evolutions);
      })
      .catch(err => console.log(err));
  };

  const getEvolutionLine = (evolutionsArr, resultArr) => {
    if (evolutionsArr.evolves_to.length === 0) {
      API.getPokeAPI(evolutionsArr.species.url)
        .then(res => {
          return API.getPokemonData(res.data.id);
        })
        .then(res => {
          resultArr.push({
            name: evolutionsArr.species.name,
            url: evolutionsArr.species.url,
            sprite: res.data.sprites.front_default,
            method: getEvolutionMethod(evolutionsArr.evolution_details[0]),
          });

          setEvolutionData({ ...evolutionData, evolutions: resultArr });
          const url = resultArr[0].url;
          const id = url.split('/')[url.split('/').length - 2];
          getEggMoves(`https://pokeapi.co/api/v2/pokemon/${id}/`);

          return;
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      API.getPokeAPI(evolutionsArr.species.url)
        .then(res => {
          return API.getPokemonData(res.data.id);
        })
        .then(res => {
          resultArr.push({
            name: evolutionsArr.species.name,
            url: evolutionsArr.species.url,
            sprite: res.data.sprites.front_default,
            method: getEvolutionMethod(evolutionsArr.evolution_details[0]),
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

  const getAltForms = () => {
    API.getSpeciesData(pokemonData.pokemonId)
      .then(res => {
        const forms = [];
        res.data.varieties.filter(form => {
          if (!form.is_default) {
            forms.push({
              name: form.pokemon.name.replace(/-/g, ' '),
              url: form.pokemon.url,
            });
          }
        });

        getAltFormSprites(forms);
      })
      .catch(err => console.log(err));
  };

  const getAltFormSprites = forms => {
    forms.forEach(form => {
      API.getPokeAPI(form.url)
        .then(res => {
          form.sprite = res.data.sprites.front_default;
          setForms([...forms, forms]);
        })
        .catch(err => console.log(err));
    });
  };

  const getEggMoves = url => {
    API.getPokeAPI(url)
      .then(res => {
        const eggMoves = [];
        res.data.moves.forEach(move => {
          move.version_group_details.filter(version => {
            if (version.version_group.name === 'ultra-sun-ultra-moon') {
              if (version.move_learn_method.name === 'egg') {
                eggMoves.push({
                  move_name: move.move.name,
                  level_learned_at: version.level_learned_at,
                  learn_method: version.move_learn_method.name,
                });
              }
            }
          });
        });

        // sort moves alphabetically
        eggMoves.sort((a, b) => (a.move_name > b.move_name ? 1 : -1));

        setPokemonData({
          ...pokemonData,
          eggMoves,
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <PokemonContainer
          pokemonData={pokemonData}
          speciesData={speciesData}
          forms={forms}
          evolutionData={evolutionData}
        />
      </ScrollView>
    </View>
  );
}
