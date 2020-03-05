import { put, call, delay, all, takeLeading } from 'redux-saga/effects';

import api from "../../services/api";

import { Creators as QuestionActions } from '../ducks/questions';
import { Creators as SpecificQuestionActions } from '../ducks/specificQuestion';

export default function* () {
  yield all([
    takeLeading(Types.API_LOAD_QUESTIONS, loadQuestionsFromApi),
    takeLeading(Types.API_LOAD_QUESTION, loadQuestionByIdFromApi)
  ]);
}
function* loadQuestionByIdFromApi(action) {
  try {
    const { data } = yield call(api.get, `/question/${action.id}`);
    
    yield put(SpecificQuestionActions.updateQuestion(data));
  } catch (e) {
    console.error(e);
  }
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
  API_LOAD_QUESTIONS: "API_LOAD_QUESTIONS",
  API_LOAD_QUESTION: "API_LOAD_QUESTION"
}

export const Creators = {
  apiLoadQuestions: () => (
    {
      type: Types.API_LOAD_QUESTIONS
    }
  ),
  apiLoadQuestion: id => (
    {
      type: Types.API_LOAD_QUESTION,
      id
    }
  )
}