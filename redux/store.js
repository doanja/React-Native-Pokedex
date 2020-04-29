import { createStore } from 'redux';
import rootReducer from './rootReducer';
import axios from 'axios';
import { setToken, getToken } from '../constants/helper';

function savetoStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    setToken('state', serializedState);
  } catch (err) {
    console.log('Error saving to storage in store:', err);
  }
}

function loadFromStorage() {
  try {
    const serializedState = getToken('state');

    if (serializedState === null) {
      return undefined;
    }

    const token = JSON.parse(serializedState).login.token;

    token
      ? (axios.defaults.headers.common.Authorization = `Bearer ${token}`)
      : (axios.defaults.headers.common.Authorization = '');

    return JSON.parse(serializedState);
  } catch (err) {
    console.log('Error loading from local storage in store:', err);
    return undefined;
  }
}

const persistedState = loadFromStorage();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => savetoStorage(store.getState()));

export default store;
