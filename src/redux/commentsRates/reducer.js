import types from './types'

const initialState = {
  byCommentId: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_COMMENTS_RATES:
      return {
        ...state,
        byCommentId: action.payload,
      }
    default:
      return state
  }
}
