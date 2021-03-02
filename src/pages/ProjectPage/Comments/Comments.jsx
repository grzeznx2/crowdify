import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { setParentCommentId, clearParentCommentId } from '../../../redux/project/actions'

import Button from '../../../components/Button/Button'
import Comment from './Comment'
import CommentModal from '../../../components/Modals/CommentModal/CommenModal'

export default function Comments({ comments }) {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  const openCommentModal = () => setIsCommentModalOpen(true)
  const closeCommentModal = () => setIsCommentModalOpen(false)

  const handleResponseButton = commentId => {
    if (user) {
      dispatch(setParentCommentId(commentId))
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  const handleEditButton = commentId => {
    if (user) {
      dispatch(setParentCommentId(commentId))
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  const handleAddCommentButton = () => {
    if (user) {
      dispatch(clearParentCommentId())
      openCommentModal()
    } else {
      history.push(`/auth?redirectTo=${location.pathname}`)
    }
  }

  const renderNestedComments = () => {
    const flattenedArray = []

    const iterate = array => {
      for (let i = 0; i < array.length; i++) {
        const comment = array[i]
        const commentMarkup = (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser={user}
            handleEditButton={() => handleEditButton(comment.id)}
            handleResponseButton={() => handleResponseButton(comment.id)}
          />
        )
        flattenedArray.push(commentMarkup)

        if (array[i].comments.length !== 0) iterate(array[i].comments)
      }
    }

    iterate(comments)
    return flattenedArray
  }

  return (
    <>
      <CommentModal isModalOpen={isCommentModalOpen} closeModal={closeCommentModal} />
      <section class="section-comments">
        <h2 class="section-title section-title--text-primary">Comments</h2>
        <div class="container">
          {renderNestedComments()}
          <Button handleClick={handleAddCommentButton} modifiers="primary">
            {user ? 'add comment' : 'log in to add comment'}
          </Button>
        </div>
      </section>
    </>
  )
}
