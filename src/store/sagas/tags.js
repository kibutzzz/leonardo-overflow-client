import { put, call, delay, all, takeLeading } from 'redux-saga/effects';

import api from "../../services/api";

import { Creators as TagActions } from '../ducks/tags';

export default function* () {
  yield all([
    takeLeading(Types.API_LOAD_TAGS, loadTagsFromApi)
  ]);
}

function* loadTagsFromApi() {
  try {
    const { data } = yield call(api.get, "/tag");

    yield put(TagActions.addTags(data))
  } catch (e) {
    console.error(e)
  }

  yield delay(1000)
}

export const Types = {
  API_LOAD_TAGS: "API_LOAD_TAGS"
}

export const Creators = {
  apiLoadTags: () => (
    {
      type: Types.API_LOAD_TAGS
    }
  )
}