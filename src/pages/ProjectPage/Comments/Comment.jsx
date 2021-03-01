import React from 'react'

import Avatar from '../../../components/Avatar/Avatar'
import './Comment.scss'

const Comment = ({
  comment: {
    createdAt,
    content,
    user: { firstName, lastName, photo },
    depth,
  },
}) => {
  return (
    <div className="comment" style={{ marginLeft: `${(depth - 1) * 50}px` }}>
      <div className="comment__top">
        <div className="comment__avatar">
          <Avatar src={photo} alt={`${firstName} ${lastName} photo`} />
        </div>
        <div className="comment__name-date">
          <span className="comment__name">
            {firstName} {lastName}
          </span>
          <span className="comment__date">{createdAt}</span>
        </div>
      </div>
      <div className="comment__middle">
        <p className="comment__content">{content}</p>
      </div>
      <div className="comment__bottom"></div>
    </div>
  )
}

export default Comment
