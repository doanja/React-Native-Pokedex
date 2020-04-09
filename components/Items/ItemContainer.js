import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import { ItemSprite, ItemDescription, ItemCategory, ItemCost } from './index';
import ItemAttribute from './ItemAttribute';

export default function ItemContainer({ itemData, learntBy }) {
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
    </Card>
  );
}
