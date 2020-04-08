import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import API from '../services/pokemonAPI';

// TODO: import item container

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
    navlink: '',
  });

  useEffect(() => {
    getItemData();
  }, [name]);

  const getItemData = () => {
    API.getItemData(name)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return <View></View>;
}
