import axios from 'axios';

export default {
  addToFavorites: (name, url) => {
    return axios.put(`https://doanja-pokedex-server.herokuapp.com/favorites/add`, { name, url });
  },

  removeFromFavorites: (name, url) => {
    return axios.put(`https://doanja-pokedex-server.herokuapp.com/favorites/remove`, { name, url });
  },

  getFavorites: () => {
    return axios.get(`https://doanja-pokedex-server.herokuapp.com/favorites`);
  },
};
