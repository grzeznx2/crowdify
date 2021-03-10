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
    case types.ASYNC_COMMENT_RATE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: undefined,
      }
    case types.POST_COMMENT_RATE_SUCCESS:
      const { rate } = action.payload
      const commentId = rate.comment
      return {
        ...state,
        byCommentId: {
          ...state.byCommentId,
          [commentId]: [...state.byCommentId[commentId], rate],
        },
      }
    case types.UPDATE_COMMENT_RATE_SUCCESS:
      const { rate: updatedRate } = action.payload
      const updatedRateCommentId = updatedRate.comment

      const newRates = state.byCommentId[updatedRateCommentId].map(el => {
        if (el._id === updatedRate._id) return updatedRate
        return el
      })
      return {
        ...state,
        byCommentId: {
          ...state.byCommentId,
          [updatedRateCommentId]: newRates,
        },
      }
    case types.DELETE_COMMENT_RATE_SUCCESS:
      const { rateId, commentId: deletedRateCommentId } = action.payload
      const ratesAfterRemoval = state.byCommentId[deletedRateCommentId].filter(rate => rate._id !== rateId)
      return {
        ...state,
        byCommentId: {
          ...state.byCommentId,
          [deletedRateCommentId]: ratesAfterRemoval,
        },
      }
    default:
      return state
  }
}
