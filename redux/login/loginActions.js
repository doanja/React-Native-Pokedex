import { SET_LOGIN_STATUS, SET_AUTH_TOKEN, RESET_STATE } from './loginTypes';

export const setLoginStatus = status => {
  return {
    type: SET_LOGIN_STATUS,
    payload: status
  };
};

export const setAuthToken = token => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE
  };
};
