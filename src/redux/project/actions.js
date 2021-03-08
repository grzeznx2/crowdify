import types from './types'

export const editComment = payload => ({
  type: types.EDIT_COMMENT,
  payload,
})
export const deleteComment = payload => ({
  type: types.DELETE_COMMENT,
  payload,
})
export const setProject = project => ({
  type: types.SET_PROJECT,
  payload: project,
})

export const addNewComment = payload => ({
  type: types.ADD_NEW_COMMENT,
  payload,
})
export const respondToComment = payload => ({
  type: types.RESPOND_TO_COMMENT,
  payload,
})
