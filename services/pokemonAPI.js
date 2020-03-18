import axios from 'axios';

export default {
  getPokemonList: (offset, limit = 20) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  },
  getPokemonData: id => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  },
  getSpeciesData: id => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  },
  getEvolutionData: url => {
    return axios.get(url);
  },
  getEvolutionSpecies: url => {
    return axios.get(url);
  },
  getVarietySprites: varieties => {
    return axios.get(varieties);
  }
};
