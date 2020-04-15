import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';

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
  Gender,
  CatchRate,
  HatchSteps,
  Happiness,
  Moveset,
  Types,
} from '../Pokemon/index';

import SubCard from '../Common/SubCard';
import SubCardMultiple from '../Common/SubCardMultiple';

export default function ItemContainer({ pokemonData, speciesData, forms, evolutionData }) {
  const navigation = useNavigation();

  return (
    <View>
      <Sprite
        name={pokemonData.name}
        spriteDefault={pokemonData.spriteDefault}
        spriteShiny={pokemonData.spriteShiny}
      />
      {/* <Types types={pokemonData.types} />

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

      <GrowthRate growthRate={speciesData.growthRate} /> */}

      {/* <SubCard
        header={'habitat'}
        data={speciesData.habitat}
        capitalize
        touchable
        onPress={() =>
          navigation.navigate('Habitat', {
            habitatName: speciesData.habitat,
          })
        }
      />

      <Gender gender={speciesData.gender} />

      <SubCard header={'catch rate'} data={speciesData.catchRate} />

      <SubCard header={'hatch steps'} data={speciesData.hatchSteps} />

      <SubCard header={'happiness'} data={speciesData.baseHappiness} />

      <SubCard
        header={'shape'}
        data={speciesData.shape}
        capitalize
        touchable
        onPress={() =>
          navigation.navigate('Shape', {
            shapeName: speciesData.shape,
          })
        }
      />

      <Moveset
        levelUpMoves={pokemonData.levelUpMoves}
        tmMoves={pokemonData.tmMoves}
        eggMoves={pokemonData.eggMoves}
      /> */}
    </View>
  );
}
