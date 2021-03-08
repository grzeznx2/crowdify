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
    case types.ADD_NEW_COMMENT:
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          comments: [...state.currentProject.comments, action.payload],
        },
      }
    case types.RESPOND_TO_COMMENT:
      const { newComment, parentCommentId } = action.payload
      const oldComments = state.currentProject.comments

      const parentCommentIndex = oldComments.findIndex(comment => comment.id === parentCommentId)
      const parentCommentDepth = oldComments[parentCommentIndex].depth
      let searchedIndex = oldComments.length

      for (let i = parentCommentIndex + 1; i < oldComments.length - 1; i++) {
        if (oldComments[i].depth === parentCommentDepth) {
          searchedIndex = i
          break
        }
      }

      const left = oldComments.slice(0, searchedIndex)
      const right = oldComments.slice(searchedIndex)
      const newComments = [...left, newComment, ...right]

      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          comments: newComments,
        },
      }
    case types.EDIT_COMMENT:
      const editedComment = action.payload
      const editedComments = state.currentProject.comments.map(comment => (comment.id === editedComment.id ? editedComment : comment))

      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          comments: editedComments,
        },
      }
    case types.DELETE_COMMENT:
      const deletedCommentId = action.payload
      let canComeIn = true
      let deletedCommentDepth = 0

      const commentsAfterDeletion = state.currentProject.comments.filter(comment => {
        if (!canComeIn && comment.depth === deletedCommentDepth) canComeIn = true
        if (comment.id === deletedCommentId) {
          canComeIn = false
          deletedCommentDepth = comment.depth
        }
        return canComeIn
      })
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          comments: commentsAfterDeletion,
        },
      }

    default:
      return state
  }
}
