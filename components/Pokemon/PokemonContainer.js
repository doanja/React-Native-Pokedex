import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';

import {
  Sprite,
  Stats,
  Abilities,
  Evolutions,
  AlternativeForms,
  Gender,
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

      <Evolutions evolutions={evolutionData.evolutions} />

      <AlternativeForms forms={forms.alternativeForms} /> */}

      <SubCardMultiple
        header={'held items'}
        data={pokemonData.items}
        capitalize
        touchable
        onPress={() =>
          navigation.navigate('Items', {
            itemName: pokemonData.items,
          })
        }
      />

      {/* <SubCard header={'height'} data={`${pokemonData.height} in.`} />

      <SubCard header={'weight'} data={`${pokemonData.weight} lbs.`} />

      <SubCard header={'experience'} data={pokemonData.baseExperience} />

      <SubCardMultiple header={'effort values'} data={pokemonData.evs} capitalize />

      <SubCard header={'description'} data={speciesData.description} /> */}

      <SubCardMultiple
        header={'egg groups'}
        data={speciesData.eggGroups}
        capitalize
        touchable
        onPress={() =>
          navigation.navigate('EggGroups', {
            groupName: speciesData.eggGroups,
          })
        }
      />

      {/* <SubCard header={'growth rate'} data={speciesData.growthRate} capitalize />

      <SubCard
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
