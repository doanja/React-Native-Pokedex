import axios from 'axios';

export default {
  login: (email, password) => {
    return axios.post('https://doanja-pokedex-server.herokuapp.com/login', { email, password });
  },
  signup: (email, password) => {
    return axios.post('https://doanja-pokedex-server.herokuapp.com/signup', { email, password });
  },
};
