import React, { useState, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import Button from '../../../components/Button/Button'
import Comment from './Comment'
import CommentModal from '../../../components/Modals/CommentModal/CommenModal'

const initialState = {
  formName: '',
  modalTitle: '',
  parentCommentId: '',
  currentCommentId: '',
  currentCommentContent: '',
}

const types = {
  SET_RESPOND_TO_COMMENT_FORM: 'SET_RESPOND_TO_COMMENT_FORM',
  SET_EDIT_COMMENT_FORM: 'SET_EDIT_COMMENT_FORM',
  SET_DELETE_COMMENT_FORM: 'SET_DELETE_COMMENT_FORM',
  SET_ADD_COMMENT_FORM: 'SET_ADD_COMMENT_FORM',
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_RESPOND_TO_COMMENT_FORM:
      return {
        ...state,
        formName: 'respondToComment',
        modalTitle: 'respond to the comment',
        parentCommentId: action.payload.parentCommentId,
        currentCommentId: '',
        currentCommentContent: '',
      }
    case types.SET_EDIT_COMMENT_FORM:
      return {
        ...state,
        formName: 'editComment',
        modalTitle: 'edit comment',
        parentCommentId: '',
        currentCommentId: action.payload.currentCommentId,
        currentCommentContent: action.payload.currentCommentContent,
      }
    case types.SET_DELETE_COMMENT_FORM:
      return {
        ...state,
        formName: 'deleteComment',
        modalTitle: 'are you sure you want to delete the comment?',
        parentCommentId: '',
        currentCommentId: action.payload.currentCommentId,
        currentCommentContent: '',
      }
    case types.SET_ADD_COMMENT_FORM:
      return {
        ...state,
        formName: 'addComment',
        modalTitle: 'leave a comment',
        parentCommentId: '',
        currentCommentId: '',
        currentCommentContent: '',
      }
    default:
      return state
  }
}

export default function Comments({ comments }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const history = useHistory()
  const location = useLocation()
  const user = useSelector(state => state.user.currentUser)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  const openCommentModal = () => setIsCommentModalOpen(true)
  const closeCommentModal = () => setIsCommentModalOpen(false)

  const handleButton = (type, payload) => {
    if (user) {
      dispatch({ type, payload })
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  const handleResponseButton = parentCommentId => handleButton(types.SET_RESPOND_TO_COMMENT_FORM, { parentCommentId })
  const handleEditButton = (currentCommentId, currentCommentContent) => handleButton(types.SET_EDIT_COMMENT_FORM, { currentCommentId, currentCommentContent })
  const handleDeleteButton = currentCommentId => handleButton(types.SET_DELETE_COMMENT_FORM, { currentCommentId })
  const handleAddCommentButton = () => handleButton(types.SET_ADD_COMMENT_FORM)

  return (
    <>
      <CommentModal
        outerContainerModifiers={state.formName !== 'deleteComment' ? 'bg-blue' : 'bg-red'}
        isModalOpen={isCommentModalOpen}
        closeModal={closeCommentModal}
        formName={state.formName}
        modalTitle={state.modalTitle}
        currentCommentId={state.currentCommentId}
        parentCommentId={state.parentCommentId}
        currentCommentContent={state.currentCommentContent}
      />
      <section class="section-comments">
        <h2 class="section-title section-title--text-primary">Comments</h2>
        <div class="container">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={user}
              handleEditButton={() => handleEditButton(comment.id, comment.content)}
              handleDeleteButton={() => handleDeleteButton(comment.id)}
              handleResponseButton={() => handleResponseButton(comment.id)}
            />
          ))}
          <Button handleClick={handleAddCommentButton} modifiers="primary">
            {user ? 'add comment' : 'log in to add comment'}
          </Button>
        </div>
      </section>
    </>
  )
}
