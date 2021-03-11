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
const asyncCommentRateRequestSuccess = () => ({
  type: types.ASYNC_COMMENT_RATE_REQUEST_SUCCESS,
})
const postCommentRateSuccess = payload => ({
  type: types.POST_COMMENT_RATE_SUCCESS,
  payload,
})
const updateCommentRateSuccess = payload => ({
  type: types.UPDATE_COMMENT_RATE_SUCCESS,
  payload,
})
const deleteCommentRateSuccess = payload => ({
  type: types.DELETE_COMMENT_RATE_SUCCESS,
  payload,
})

export const postCommentRate = (isPositive, commentId) => {
  return async dispatch => {
    dispatch(asyncCommentRateRequestStart())

    try {
      const fetchOptions = {
        url: `/api/v1/comments/${commentId}/rates`,
        init: {
          body: JSON.stringify({ isPositive }),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        },
      }

      const response = await fetch(fetchOptions.url, { ...fetchOptions.init })
      const responseData = await response.json()
      if (!response.ok) throw Error(responseData.message)
      const { rate } = responseData.data
      dispatch(asyncCommentRateRequestSuccess())
      dispatch(postCommentRateSuccess({ rate }))
    } catch (error) {
      dispatch(asyncCommentRateRequestFailure(error.message))
    }
  }
}
export const updateCommentRate = (isPositive, rateId) => {
  return async dispatch => {
    dispatch(asyncCommentRateRequestStart())

    try {
      const fetchOptions = {
        url: `/api/v1/rates/${rateId}`,
        init: {
          body: JSON.stringify({ isPositive }),
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        },
      }

      const response = await fetch(fetchOptions.url, { ...fetchOptions.init })
      const responseData = await response.json()
      if (!response.ok) throw Error(responseData.message)
      const { rate } = responseData.data

      dispatch(asyncCommentRateRequestSuccess())
      dispatch(updateCommentRateSuccess({ rate }))
    } catch (error) {
      dispatch(asyncCommentRateRequestFailure(error.message))
    }
  }
}
export const deleteCommentRate = (rateId, commentId) => {
  return async dispatch => {
    dispatch(asyncCommentRateRequestStart())

    try {
      const fetchOptions = {
        url: `/api/v1/rates/${rateId}`,
        init: {
          body: null,
          method: 'DELETE',
        },
      }

      const response = await fetch(fetchOptions.url, { ...fetchOptions.init })

      if (!response.ok) {
        const responseData = await response.json()
        throw Error(responseData.message)
      }

      dispatch(asyncCommentRateRequestSuccess())
      dispatch(deleteCommentRateSuccess({ rateId, commentId }))
    } catch (error) {
      console.log(error.message)
      dispatch(asyncCommentRateRequestFailure(error.message))
    }
  }
}
