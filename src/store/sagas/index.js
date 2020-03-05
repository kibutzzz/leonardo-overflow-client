import { all } from 'redux-saga/effects';
import tags from './tags';

export default function* root() {
  yield all([
    tags()
  ]);
}