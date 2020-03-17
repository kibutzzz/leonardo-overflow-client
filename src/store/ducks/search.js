export const Types = {
  SET_RESULTS: "search/SET_RESULTS"
}

const INITIAL_STATE = {
  data: []
}

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_RESULTS:
      return {
        ...state,
        data:  action.payload
      }
    default:
      return state;
  }
}

export const Creators = {
  addQuestions: questions => ({
    type: Types.SET_RESULTS,
    payload: questions
  })
}