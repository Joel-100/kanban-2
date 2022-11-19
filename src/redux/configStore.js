import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rocket';
import missionsReducer from './missions/mission';

const rootReducer = combineReducers(
  {
    rockets: rocketReducer,
    missionsReducer,
  },
);

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
