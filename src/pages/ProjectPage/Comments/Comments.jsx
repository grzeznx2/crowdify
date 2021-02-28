import React, { useState } from 'react'

import Button from '../../../components/Button/Button'
import Comment from './Comment'
import CommentModal from '../../../components/Modals/CommentModal/CommenModal'

export default function Comments({ comments }) {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  const openCommentModal = () => setIsCommentModalOpen(true)
  const closeCommentModal = () => setIsCommentModalOpen(false)

  return (
    <>
      <CommentModal isModalOpen={isCommentModalOpen} closeModal={closeCommentModal} />
      <section class="section-comments">
        <h2 class="section-title section-title--text-primary">Comments</h2>
        <div class="container">
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
          <Button handleClick={openCommentModal} modifiers="primary">
            add comment
          </Button>
        </div>
      </section>
    </>
  )
}
