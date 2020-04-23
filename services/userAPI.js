import axios from 'axios';

export default {
  addToFavorites: pokemonId => {
    return axios.put(`/favorites/add`, { pokemonId });
  },

  removeFromFavorites: pokemonId => {
    return axios.put(`/favorites/remove`, { pokemonId });
  },

  getFavorites: () => {
    return axios.get(`/favorites`);
  },
};
