import types from './types'

export const setCommentsRates = payload => ({
  type: types.SET_COMMENTS_RATES,
  payload,
})
const asyncCommentRateRequestStart = () => ({
  type: types.ASYNC_COMMENT_RATE_REQUEST_START,
})
const asyncCommentRateRequestFailure = payload => ({
  type: types.ASYNC_COMMENT_RATE_REQUEST_FAILURE,
  payload,
})
