import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';
import PokemonSubList from '../Common/PokemonSubList';
import ItemSprite from './ItemSprite';
import SubCard from '../Common/SubCard';
import SubCardMultiple from '../Common/SubCardMultiple';

export default function ItemContainer({ itemData, heldBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{itemData.name}</Text>
      </CardHeader>

      <ItemSprite spriteUri={itemData.sprite} />

      <SubCard header={'description'} data={itemData.effectEntries} />

      <SubCard header={'category'} data={itemData.category} capitalize />

      <SubCard header={'cost'} data={itemData.cost} />

      <SubCardMultiple header={'attributes'} data={itemData.attributes} capitalize />

      <SubCard header={'fling effect'} data={itemData.flingEffect} />

      <SubCard header={'fling damage'} data={itemData.flingDamage} />

      <PokemonSubList header={'held by'} species={heldBy} />
    </Card>
  );
}
