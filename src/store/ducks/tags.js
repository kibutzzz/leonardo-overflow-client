export const Types = {
  ADD_ALL: "tags/ADD_ALL"
}

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet"
    }
  ]
}

export default function tags(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ALL:
      const newIds = new Set(action.payload.map(tag => tag.id));
      return {
        ...state,
        data: [...state.data.filter(tag => !newIds.has(tag.id)), ...action.payload]
      }
    default:
      return state;
  }
}

export const Creators = {
  addTags: tags => ({
    type: Types.ADD_ALL,
    payload: tags
  })
}
