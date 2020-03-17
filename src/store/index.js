import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from "redux-saga";

import questions from "./ducks/questions";
import search from "./ducks/search";
import specificQuestion from "./ducks/specificQuestion";
import tags from "./ducks/tags";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    questions,
    search,
    specificQuestion,
    tags
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;