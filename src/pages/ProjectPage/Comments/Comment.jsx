import React from 'react'

import Avatar from '../../../components/Avatar/Avatar'
import './Comment.scss'

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__top">
        <div className="comment__avatar">
          <Avatar
            src="https://images.unsplash.com/photo-1614485436385-dfdf19f4afa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
            alt="avatar"
          />
        </div>
        <div className="comment__name-date">
          <span className="comment__name">Grzegorz Kubik</span>
          <span className="comment__date">17.09.2021</span>
        </div>
      </div>
      <div className="comment__middle">
        <p className="comment__content">I think this project is really a waste of money!</p>
      </div>
      <div className="comment__bottom"></div>
    </div>
  )
}

export default Comment
