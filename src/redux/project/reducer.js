import types from './types'

const inititalState = {
  currentProject: null,
}

export default (state = inititalState, action) => {
  switch (action.type) {
    case types.SET_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      }
    default:
      return state
  }
}
