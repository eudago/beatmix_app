import {
  LOGIN, LOGOUT, SIGNIN
} from './constants/constants'

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, token: action.token };
    case LOGOUT:
      return { ...state, isLoggedIn: false, token: null };
    default:
      return state;
  }
}

export default auth;
