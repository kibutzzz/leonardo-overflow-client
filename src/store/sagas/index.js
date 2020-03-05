import { all } from 'redux-saga/effects';
import tags from './tags';
import questions from './questions';

export default function* root() {
  yield all([
    tags(),
    questions()
  ]);
}