import { combineReducers } from 'redux';
import nav from './reducer_nav';
import auth from './reducer_auth';
import main from './reducer_main';

const AppReducer = combineReducers({
  nav,
  auth,
  main,
});

export default AppReducer;
