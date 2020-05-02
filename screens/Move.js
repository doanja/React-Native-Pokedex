import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

import MoveContainer from '../components/Containers/MoveContainer';

export default function Move({ route }) {
  const { name } = route.params;

  const [moveData, setMoveData] = useState({
    accuracy: '',
    damageType: '',
    effectChance: '',
    description: '',
    name: '',
    power: '',
    pp: '',
    priority: '',
    statChanges: [],
    target: '',
    type: [],
    ailment: '',
    ailmentChance: '',
    category: '',
    critRate: '',
    drain: '',
    flinchChance: '',
    healing: '',
    maxHits: '',
    maxTurns: '',
    minHits: '',
    minTurns: '',
    statChance: '',
  });

  useEffect(() => {
    getMoveData();
  }, [name]);

  const getMoveData = () => {
    API.getMoveData(name)
      .then(res => {
        let description = '';

        res.data.flavor_text_entries.forEach(element => {
          if (element.language.name === 'en') description = element.flavor_text;
        });

        setMoveData({
          accuracy: res.data.accuracy,
          damageType: res.data.damage_class.name,
          effectChance: res.data.effect_chance,
          description,
          name: res.data.name,
          power: res.data.power,
          pp: res.data.pp,
          priority: res.data.priority,
          statChanges: res.data.stat_changes.map(change => `${change.change} ${change.stat.name}`),
          target: res.data.target.name.replace(/-/g, ' '),
          type: [res.data.type.name],
          ailment: res.data.meta.ailment.name,
          ailmentChance: res.data.meta.ailment_chance,
          category: res.data.meta.category.name,
          critRate: res.data.meta.crit_rate,
          drain: res.data.meta.drain,
          flinchChance: res.data.meta.flinch_chance,
          healing: res.data.meta.healing,
          maxHits: res.data.meta.max_hits,
          maxTurns: res.data.meta.max_turns,
          minHits: res.data.meta.min_hits,
          minTurns: res.data.meta.min_turns,
          statChance: res.data.meta.stat_chance,
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <MoveContainer name={name} moveData={moveData} />
      </ScrollView>
    </View>
  );
}
