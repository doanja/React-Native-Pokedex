import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

import ItemContainer from '../components/Items/ItemContainer';

export default function Item({ route }) {
  const { name } = route.params;

  const [itemData, setItemData] = useState({
    attributes: [],
    category: {
      name: '',
      url: '',
    },
    cost: '',
    effectEntries: '',
    flingEffect: '',
    flingPower: '',
    heldBy: [],
    id: '',
    name: '',
    sprite: '',
  });

  const [heldBy, setHeldBy] = useState([]);

  useEffect(() => {
    getItemData();
  }, [name]);

  const getItemData = () => {
    API.getItemData(name)
      .then(res => {
        const attributes = [];
        const heldBy = [];

        res.data.attributes.forEach(attribute => {
          attributes.push({ name: attribute.name, url: attribute.url });
        });

        res.data.held_by_pokemon.forEach(pokemon => {
          API.getPokeAPI(pokemon.pokemon.url)
            .then(res => {
              heldBy.push({
                name: pokemon.pokemon.name,
                url: pokemon.pokemon.url,
                imageUrl: res.data.sprites.front_default,
                id: res.data.id,
              });

              // sort pokemon by id
              heldBy.sort((a, b) => (a.id > b.id ? 1 : -1));

              setHeldBy(heldBy);
            })
            .catch(err => {
              console.log(err);
            });
        });

        setItemData({
          attributes,
          category: { name: res.data.category.name.replace(/-/g, ' '), url: res.data.category.url },
          cost: res.data.cost,
          effectEntries: res.data.effect_entries[0].effect,
          flingEffect: res.data.fling_effect,
          flingPower: res.data.fling_power,
          id: res.data.id,
          name: res.data.name,
          sprite: res.data.sprites.default,
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <ItemContainer itemData={itemData} heldBy={heldBy} />
      </ScrollView>
    </View>
  );
}
