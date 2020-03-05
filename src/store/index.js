import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import tags from "./ducks/tags";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  tags,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;