import axios from 'axios';

export default {
  getPokemonList: (offset, limit = 20) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  },
  getPokemonData: (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  },
  getSpeciesData: (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  },
  getAbilityData: (abilityName) => {
    return axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}`);
  },
  getPokeAPI: (url) => {
    return axios.get(url);
  },
};
