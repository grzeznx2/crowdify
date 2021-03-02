import types from './types'

const inititalState = {
  currentProject: null,
  currentCommentId: '',
}

export default (state = inititalState, action) => {
  switch (action.type) {
    case types.SET_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      }
    case types.SET_PARENT_COMMENT_ID:
      return {
        ...state,
        currentCommentId: action.payload,
      }
    case types.CLEAR_PARENT_COMMENT_ID:
      return {
        ...state,
        currentCommentId: '',
      }
    case types.SET_NEW_COMMENT:
      const newComment = action.payload
      const { currentCommentId } = state
      console.log(newComment)

      const insertNewComment = target => {
        if (typeof target !== 'object' || typeof target === null) return target
        let copy, value

        if (currentCommentId && target.id === currentCommentId) target.comments.push(newComment)

        copy = Array.isArray(target) ? [] : {}

        for (let key in target) {
          value = target[key]
          copy[key] = insertNewComment(value)
        }

        return copy
      }

      const newComments = currentCommentId ? insertNewComment(state.currentProject.comments) : [...insertNewComment(state.currentProject.comments), newComment]

      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          comments: newComments,
        },
      }
    default:
      return state
  }
}
