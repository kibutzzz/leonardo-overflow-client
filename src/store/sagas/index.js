import { all } from 'redux-saga/effects';
import questions from './questions';
import search from './search';
import tags from './tags';

export default function* root() {
  yield all([
    questions(),
    search(),
    tags()
  ]);
}