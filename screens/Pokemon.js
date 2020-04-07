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
  Description,
  Evolutions,
  AlternativeForms,
  EggGroups,
  GrowthRate,
  Habitat,
  Gender,
  CatchRate,
  HatchSteps,
  Happiness,
  Shape,
  Moveset,
  Types,
} from '../components/Pokemon/index';

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
    growthRate: { name: '', url: '' },
    habitat: {
      name: '',
      url: '',
    },
    hatchSteps: '',
    shape: {
      name: '',
      url: '',
    },
    eggGroups: [],
  });

  const [forms, setForms] = useState({ alternativeForms: [] });

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
    }
  }, [evolutionData.evolutionUrl, name]);

  useEffect(() => {
    if (pokemonData.pokemonId) {
      getAlternativeForms();
    }
  }, [pokemonData.pokemonId]);

  const getPokemonData = () => {
    API.getPokemonData(name)
      .then((res) => {
        const abilities = [];
        const items = [];
        const types = [];
        const evs = [];
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        const levelUpMoves = [];
        const tmMoves = [];

        res.data.abilities.forEach((ability) => {
          abilities.push({
            name: ability.ability.name.replace(/-/g, ' '),
            url: ability.ability.url,
          });
        });

        res.data.held_items.forEach((item) => {
          items.push({
            name: item.item.name,
            id: item.item.url.split('/')[url.split('/').length - 2],
          });
        });

        res.data.types.forEach((type) => {
          types.push(type.type.name);
        });

        res.data.stats
          .filter((element) => {
            if (element.effort > 0) {
              return true;
            }
            return false;
          })
          .map((element) => {
            evs.push(`${element.effort} ${element.stat.name.replace(/-/g, ' ')}`);
          });

        res.data.stats.map((stat) => {
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

        res.data.moves.forEach((move) => {
          move.version_group_details.filter((version) => {
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
          abilities: abilities.reverse(),
          items,
          types,
          evs: evs.reverse(),
          stats: { hp, attack, defense, speed, specialAttack, specialDefense },

          levelUpMoves,
          tmMoves,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSpeciesData = () => {
    API.getSpeciesData(pokemonData.pokemonId)
      .then((res) => {
        const eggGroups = [];
        let description = '';

        res.data.egg_groups.forEach((group) => {
          eggGroups.push({ name: group.name, url: group.url });
        });

        res.data.flavor_text_entries.filter((element) => {
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
        });

        setEvolutionData({ ...evolutionData, evolutionUrl: res.data.evolution_chain.url });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEvolutionData = (url) => {
    API.getEvolutionData(url)
      .then((res) => {
        const evolutions = []; // array of objects containing each evolution
        getEvolutionLine(res.data.chain, evolutions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEvolutionLine = (evolutionsArr, resultArr) => {
    if (evolutionsArr.evolves_to.length === 0) {
      API.getEvolutionSpecies(evolutionsArr.species.url)
        .then((res) => {
          return API.getPokemonData(res.data.id);
        })
        .then((res) => {
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
        .catch((err) => {
          console.log(err);
        });
    } else {
      API.getEvolutionSpecies(evolutionsArr.species.url)
        .then((res) => {
          return API.getPokemonData(res.data.id);
        })
        .then((res) => {
          resultArr.push({
            name: evolutionsArr.species.name,
            url: evolutionsArr.species.url,
            sprite: res.data.sprites.front_default,
            method: getEvolutionMethod(evolutionsArr.evolution_details[0]),
          });
          evolutionsArr.evolves_to.forEach((evolution) => {
            return getEvolutionLine(evolution, resultArr);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getEvolutionMethod = (methods) => {
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

  const getAlternativeForms = () => {
    API.getSpeciesData(pokemonData.pokemonId)
      .then((res) => {
        const alternativeForms = [];
        res.data.varieties.filter((form) => {
          if (!form.is_default) {
            alternativeForms.push({
              name: form.pokemon.name.replace(/-/g, ' '),
              url: form.pokemon.url,
            });
          }
        });

        getAlternateFormSprites(alternativeForms);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAlternateFormSprites = (alternativeForms) => {
    alternativeForms.forEach((form) => {
      API.getVarietySprites(form.url)
        .then((res) => {
          form.sprite = res.data.sprites.front_default;
          setForms({ ...forms, alternativeForms });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const getEggMoves = (url) => {
    console.log('get egg moves called');
    API.getEggMoves(url)
      .then((res) => {
        const eggMoves = [];
        res.data.moves.forEach((move) => {
          move.version_group_details.filter((version) => {
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Sprite
          name={name}
          spriteDefault={pokemonData.spriteDefault}
          spriteShiny={pokemonData.spriteShiny}
        />

        <Types types={pokemonData.types} />

        <Stats stats={pokemonData.stats} />

        <Abilities abilities={pokemonData.abilities} />

        <HeldItems items={pokemonData.items} />

        <Height height={pokemonData.height} />

        <Weight weight={pokemonData.weight} />

        <Experience experience={pokemonData.baseExperience} />

        <EffortValues evs={pokemonData.evs} />

        <Description description={speciesData.description} />

        <Evolutions evolutions={evolutionData.evolutions} />

        <AlternativeForms forms={forms.alternativeForms} />

        <EggGroups groups={speciesData.eggGroups} />

        <GrowthRate growthRate={speciesData.growthRate} />

        <Habitat habitat={speciesData.habitat} />

        <Gender gender={speciesData.gender} />

        <CatchRate catchRate={speciesData.catchRate} />

        <HatchSteps hatchSteps={speciesData.hatchSteps} />

        <Happiness happiness={speciesData.baseHappiness} />

        <Shape shape={speciesData.shape} />

        <Moveset
          levelUpMoves={pokemonData.levelUpMoves}
          tmMoves={pokemonData.tmMoves}
          eggMoves={pokemonData.eggMoves}
        />
      </ScrollView>
    </View>
  );
}
