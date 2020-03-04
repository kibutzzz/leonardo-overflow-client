import { takeEvery, put, all, call } from 'redux-saga/effects';
import api from "./services/api";



function* loadTagsFromApi(action) {
    console.log("EFFECT", action);
    console.log(api)
    const tags = yield call(api.get("/tags"));
    console.log(tags);
    yield put({
        type: "ADD_TAGS",
        payload: tags
    })
}

export default function* root() {
    yield all([
        takeEvery("API_LOAD_TAGS", loadTagsFromApi)
    ]);
}