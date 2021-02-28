import React from 'react'

import Comment from './Comment'

export default function ProjectDescription({ summary, ...otherProps }) {
  return (
    <section class="section-comments">
      <h2 class="section-title section-title--text-primary">Comments</h2>
      <div class="container">
        <Comment />
      </div>
    </section>
  )
}
