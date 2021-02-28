import React from 'react'

import Comment from './Comment'

export default function Comments({ comments }) {
  return (
    <section class="section-comments">
      <h2 class="section-title section-title--text-primary">Comments</h2>
      <div class="container">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  )
}
