import axios from 'axios';

export default {
  getPokemonList: (offset, limit = 20) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  }
};
