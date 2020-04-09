import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../';
import {
  ItemSprite,
  ItemDescription,
  ItemCategory,
  ItemCost,
  ItemAttribute,
  ItemFlingEffect,
  ItemFlingDamage,
  HeldBy,
} from './index';

export default function ItemContainer({ itemData, heldBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{itemData.name}</Text>
      </CardHeader>

      <ItemSprite spriteUri={itemData.sprite} />

      <ItemDescription description={itemData.effectEntries} />

      <ItemCategory category={itemData.category.name} />

      <ItemCost cost={itemData.cost} />

      <ItemAttribute attribute={itemData.attributes} />

      <ItemFlingEffect flingEffect={itemData.flingEffect} />

      <ItemFlingDamage flingDamage={itemData.flingDamage} />

      <HeldBy heldBy={heldBy} />
    </Card>
  );
}
