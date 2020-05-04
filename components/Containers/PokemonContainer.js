import React from 'react';
import { View } from 'react-native';
import { PokemonSprite, Stats, Evolutions, PokemonForms, Gender, Moveset, Types } from '../Pokemon';
import SubCard from '../Common/SubCard';
import SubCardMultiple from '../Common/SubCardMultiple';

export default function ItemContainer({ pokemonData, speciesData, forms, evolutionData }) {
  return (
    <View>
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

      <Evolutions evolutions={evolutionData.evolutions} />

      <PokemonForms forms={forms} />

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

      <SubCard header={'description'} data={speciesData.description} />

      <SubCardMultiple
        header={'egg groups'}
        data={speciesData.eggGroups}
        capitalize
        touchable
        navigateTo={'EggGroups'}
      />

      <SubCard
        header={'growth rate'}
        data={speciesData.growthRate}
        capitalize
        touchable
        navigateTo={'GrowthRate'}
      />

      <SubCard
        header={'habitat'}
        data={speciesData.habitat}
        capitalize
        touchable
        navigateTo={'Habitat'}
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
        navigateTo={'Shape'}
      />

      <Moveset
        levelUpMoves={pokemonData.levelUpMoves}
        tmMoves={pokemonData.tmMoves}
        eggMoves={pokemonData.eggMoves}
      />
    </View>
  );
}
