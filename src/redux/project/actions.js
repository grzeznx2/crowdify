import types from './types'

export const setProject = project => ({
  type: types.SET_PROJECT,
  payload: project,
})
