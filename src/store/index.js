import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from "redux-saga";

import tags from "./ducks/tags";
import questions from "./ducks/questions";
import specificQuestion from "./ducks/specificQuestion";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    tags, 
    questions,
    specificQuestion
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;