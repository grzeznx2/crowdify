import types from './types'

export const setProject = project => ({
  type: types.SET_PROJECT,
  payload: project,
})

export const setParentCommentId = id => ({
  type: types.SET_PARENT_COMMENT_ID,
  payload: id,
})

export const clearParentCommentId = () => ({
  type: types.CLEAR_PARENT_COMMENT_ID,
})

export const setNewComment = payload => ({
  type: types.SET_NEW_COMMENT,
  payload,
})
