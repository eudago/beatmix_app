import { combineReducers } from 'redux';
import nav from './reducer_nav';
import auth from './reducer_auth';

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
