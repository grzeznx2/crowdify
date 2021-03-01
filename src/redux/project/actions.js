import types from './types'

export const setProject = project => ({
  type: types.SET_PROJECT,
  payload: project,
})

export const setCurrentCommentId = id => ({
  type: types.SET_CURRENT_COMMENT_ID,
  payload: id,
})

export const clearCurrentCommentId = () => ({
  type: types.CLEAR_CURRENT_COMMENT_ID,
})

export const setNewComment = payload => ({
  type: types.SET_NEW_COMMENT,
  payload,
})
