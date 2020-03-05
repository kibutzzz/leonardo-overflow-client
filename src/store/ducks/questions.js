export const Types = {
  ADD_ALL: "questions/ADD_ALL"
}

const INITIAL_STATE = {
  data: []
}

export default function questions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ALL:
      const newIds = new Set(action.payload.map(question => question.id));
      return {
        ...state,
        data: [...state.data.filter(question => !newIds.has(question.id)), ...action.payload]
      }
    default:
      return state;
  }
}

export const Creators = {
  addQuestions: questions => ({
    type: Types.ADD_ALL,
    payload: questions
  })
}
