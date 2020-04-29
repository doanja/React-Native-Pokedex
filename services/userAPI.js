import axios from 'axios';

export default {
  addToFavorites: pokemonId => {
    console.log('pokemonId :>> ', pokemonId);
    return axios.put(`https://doanja-pokedex-server.herokuapp.com/favorites/add`, { pokemonId });
  },

  removeFromFavorites: pokemonId => {
    console.log('pokemonId :>> ', pokemonId);
    return axios.put(`https://doanja-pokedex-server.herokuapp.com/favorites/remove`, { pokemonId });
  },

  getFavorites: () => {
    return axios.get(`https://doanja-pokedex-server.herokuapp.com/favorites`);
  },
};
