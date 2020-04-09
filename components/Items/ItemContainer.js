import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import { ItemSprite, ItemDescription, ItemCategory } from './index';

export default function ItemContainer({ itemData, learntBy }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{itemData.name}</Text>
      </CardHeader>

      <ItemSprite spriteUri={itemData.sprite} />

      <ItemDescription description={itemData.effectEntries} />

      <ItemCategory category={itemData.category.name} />
    </Card>
  );
}
