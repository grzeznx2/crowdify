import types from './types'

const initialState = {
  byCommentId: {},
  isLoading: false,
  error: undefined,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_COMMENTS_RATES:
      return {
        ...state,
        byCommentId: action.payload,
      }
    case types.ASYNC_COMMENT_RATE_REQUEST_START:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case types.ASYNC_COMMENT_RATE_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
