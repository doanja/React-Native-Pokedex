import { createStore } from 'redux';
import rootReducer from './rootReducer';
import axios from 'axios';
import { setToken } from '../constants/helper';
import { AsyncStorage } from 'react-native';

const savetoStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    setToken('state', serializedState);
  } catch (err) {
    console.log('Error saving to storage in store:', err);
  }
};

const loadFromStorage = () => {
  AsyncStorage.getItem('state')
    .then(value => {
      const serializedState = value;

      if (serializedState === null) {
        return undefined;
      }

      const token = JSON.parse(serializedState).login.token;

      token
        ? (axios.defaults.headers.common.Authorization = `Bearer ${token}`)
        : (axios.defaults.headers.common.Authorization = '');

      return JSON.parse(serializedState);
    })
    .catch(err => console.log(err));
};

const persistedState = loadFromStorage();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => savetoStorage(store.getState()));

export default store;
