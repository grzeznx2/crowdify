import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { setParentCommentId, clearParentCommentId, editComment } from '../../../redux/project/actions'

import Button from '../../../components/Button/Button'
import Comment from './Comment'
import CommentModal from '../../../components/Modals/CommentModal/CommenModal'

export default function Comments({ comments }) {
  const [formName, setFormName] = useState('')
  const [parentCommentId, setParentCommentId] = useState('')
  const [currentCommentId, setCurrentCommentId] = useState('')
  const [currentCommentContent, setCurrentCommentContent] = useState('')

  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  const openCommentModal = () => setIsCommentModalOpen(true)
  const closeCommentModal = () => setIsCommentModalOpen(false)

  const handleResponseButton = commentId => {
    if (user) {
      setFormName('respondToComment')
      setParentCommentId(commentId)
      setCurrentCommentId('')
      setCurrentCommentContent('')
      // dispatch(setParentCommentId(commentId))
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  const handleEditButton = (commentId, currentCommentContent) => {
    if (user) {
      setFormName('editComment')
      setParentCommentId('')
      setCurrentCommentId(commentId)
      setCurrentCommentContent(currentCommentContent)
      // dispatch(editComment(commentId))
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  const handleDeleteButton = commentId => {
    if (user) {
      setFormName('deleteComment')
      setParentCommentId('')
      setCurrentCommentId(commentId)
      setCurrentCommentContent('')
      // dispatch(editComment(commentId))
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  const handleAddCommentButton = () => {
    if (user) {
      setFormName('addComment')
      setParentCommentId('')
      setCurrentCommentId('')
      setCurrentCommentContent('')
      // dispatch(clearParentCommentId())
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  return (
    <>
      <CommentModal
        outerContainerModifiers={formName !== 'deleteComment' ? 'bg-blue' : 'bg-red'}
        isModalOpen={isCommentModalOpen}
        closeModal={closeCommentModal}
        formName={formName}
        currentCommentId={currentCommentId}
        parentCommentId={parentCommentId}
        currentCommentContent={currentCommentContent}
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
