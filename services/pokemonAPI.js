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
  getAbilityData: abilityName => {
    return axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}`);
  },
  getItemData: itemName => {
    return axios.get(`https://pokeapi.co/api/v2/item/${itemName}`);
  },
  getShapeData: groupName => {
    return axios.get(`https://pokeapi.co/api/v2/egg-group/${groupName}/`);
  },
  getGrowthRateData: growthName => {
    return axios.get(`https://pokeapi.co/api/v2/growth-rate/${growthName}/`);
  },
  getHabitatData: habitatName => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${habitatName}/`);
  },
  getShapeData: shapeName => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-shape/${shapeName}/`);
  },
  getMoveData: moveName => {
    return axios.get(`https://pokeapi.co/api/v2/move/${moveName}/`);
  },
  getPokeAPI: url => {
    return axios.get(url);
  },
};
