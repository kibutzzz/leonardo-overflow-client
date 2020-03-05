import { put, call, delay, all, takeLeading } from 'redux-saga/effects';

import api from "../../services/api";

import { Creators as QuestionActions } from '../ducks/questions';

export default function* () {
  yield all([
    takeLeading(Types.API_LOAD_QUESTIONS, loadQuestionsFromApi)
  ]);
}

function* loadQuestionsFromApi() {
  try {
    const { data } = yield call(api.get, "/question");

    yield put(QuestionActions.addQuestions(data))
  } catch (e) {
    console.error(e)
  }

  yield delay(1000)
}

export const Types = {
  API_LOAD_QUESTIONS: "API_LOAD_QUESTIONS"
}

export const Creators = {
  apiLoadTags: () => (
    {
      type: Types.API_LOAD_QUESTIONS
    }
  )
}