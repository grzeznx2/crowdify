import React, { useState } from 'react'

import Button from '../../../components/Button/Button'
import Comment from './Comment'
import CommentModal from '../../../components/Modals/CommentModal/CommenModal'

export default function Comments({ comments }) {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  const renderNestedComments = () => {
    const flattenedArray = []

    const iterate = array => {
      for (let i = 0; i < array.length; i++) {
        const comment = array[i]
        const commentMarkup = <Comment key={comment.id} comment={comment} />
        flattenedArray.push(commentMarkup)

        if (array[i].comments.length !== 0) iterate(array[i].comments)
      }
    }

    iterate(comments)
    return flattenedArray
  }

  const openCommentModal = () => setIsCommentModalOpen(true)
  const closeCommentModal = () => setIsCommentModalOpen(false)

  return (
    <>
      <CommentModal isModalOpen={isCommentModalOpen} closeModal={closeCommentModal} />
      <section class="section-comments">
        <h2 class="section-title section-title--text-primary">Comments</h2>
        <div class="container">
          {renderNestedComments()}
          <Button handleClick={openCommentModal} modifiers="primary">
            add comment
          </Button>
        </div>
      </section>
    </>
  )
}
