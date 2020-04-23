import axios from 'axios';

export default {
  login: (email, password) => {
    return axios.post('/login', { email, password });
  },
  signup: (email, password) => {
    return axios.post('/signup', { email, password });
  },
};
