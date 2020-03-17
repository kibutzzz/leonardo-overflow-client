import { put, call, all, takeLeading } from 'redux-saga/effects';

import api from "../../services/api";

import { Creators as SearchCreators } from '../ducks/search';

export default function* () {
  yield all([
    takeLeading(Types.API_SEARCH_QUESTIONS, searchQuestions)
  ]);
}

function* searchQuestions(action) {
  try {
    const { data } = yield call(api.get, `/question/search/${action.payload}`);

    yield put(SearchCreators.addQuestions(data));
  } catch (e) {
    console.error(e);
  }
}

const Types = {
  API_SEARCH_QUESTIONS: "saga/API_SEARCH_QUESTIONS"
}

export const Creators = {
  apiLoadQuestions: (search) => (
    {
      type: Types.API_SEARCH_QUESTIONS,
      payload: search
    }
  )
}
