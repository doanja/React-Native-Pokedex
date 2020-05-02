import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '..';
import PokemonSubList from '../Common/PokemonSubList';
import Types from '../Types/Types';
import SubCardMultiple from '../Common/SubCardMultiple';

export default function TypesContainer({ name, typeData, species }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>{name}</Text>
      </CardHeader>

      <Types types={typeData.doubleDamageFrom} header={'Double Damage From'} />

      <Types types={typeData.doubleDamageTo} header={'Double Damage To'} />

      <Types types={typeData.halfDamageFrom} header={'Half Damage From'} />

      <Types types={typeData.halfDamageTo} header={'Half Damage To'} />

      <Types types={typeData.noDamageFrom} header={'No Damage From'} />

      <Types types={typeData.noDamageTo} header={'No Damage To'} />

      <PokemonSubList header={'pokemon with this type'} species={species} />
    </Card>
  );
}
