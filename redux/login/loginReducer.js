import { SET_LOGIN_STATUS, SET_AUTH_TOKEN, RESET_STATE } from './loginTypes';

const initialState = {
  isLoggedIn: false,
  token: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, isLoggedIn: action.payload };
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
