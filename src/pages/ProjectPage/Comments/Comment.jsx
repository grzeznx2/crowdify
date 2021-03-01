import React from 'react'

import Avatar from '../../../components/Avatar/Avatar'
import Button from '../../../components/Button/Button'
import './Comment.scss'

const Comment = ({
  comment: {
    createdAt,
    content,
    user: { firstName, lastName, photo },
    depth,
  },
  handleResponseButton,
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
      <div className="comment__bottom">
        <Button className="button" handleClick={handleResponseButton}>
          Response
        </Button>
      </div>
    </div>
  )
}

export default Comment
