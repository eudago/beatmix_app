import { createStore, applyMiddleware } from 'redux';

import AppReducer from '../reducers';
import { middleware } from '../utils/redux';
import thunk from 'redux-thunk';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware, thunk),
);

export default store;
