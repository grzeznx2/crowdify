import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../../hooks/useFetch'

import Avatar from '../../../components/Avatar/Avatar'
import Button from '../../../components/Button/Button'
import './Comment.scss'

const Comment = ({
  comment: {
    createdAt,
    content,
    user: { firstName, lastName, photo, id: commentCreatorId },
    depth,
    id: commentId,
  },
  currentUser,
  handleResponseButton,
  handleEditButton,
  handleDeleteButton,
}) => {
  const { isLoading, error, sendRequest } = useFetch()
  const commentsRates = useSelector(state => state.commentsRates.byCommentId[commentId])

  let positive = 0
  let negative = 0
  let voted = ''

  let rateID = ''

  const handleVotedButton = async isPositive => {
    let options
    const possibleOptions = {
      post: {
        url: `/api/v1/comments/${commentId}/rates`,
        body: { isPositive },
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      delete: {
        url: `/api/v1/rates/${rateID}`,
        body: null,
        method: 'DELETE',
      },
      update: {
        url: `/api/v1/rates/${rateID}`,
        body: { isPositive },
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      },
    }
    if (!rateID) {
      options = possibleOptions.post
    } else if (isPositive) {
      if (voted === 'up') options = possibleOptions.delete
      else if (voted === 'down') options = possibleOptions.update
    } else {
      if (voted === 'up') options = possibleOptions.update
      else if (voted === 'down') options = possibleOptions.delete
    }
    await sendRequest(options)
  }

  const handleVoteUpButton = () => handleVotedButton(true)
  const handleVoteDownButton = () => handleVotedButton(false)

  for (let rate of commentsRates) {
    if (rate.user === currentUser.id) {
      rateID = rate._id
      if (rate.isPositive) voted = 'up'
      if (!rate.isPositive) voted = 'down'
    }
    if (rate.isPositive) positive++
    else negative++
  }

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
        {currentUser && currentUser.id === commentCreatorId && (
          <Button className="button" handleClick={handleEditButton}>
            Edit
          </Button>
        )}
        {currentUser && currentUser.id === commentCreatorId && (
          <Button className="button" handleClick={handleDeleteButton}>
            Delete
          </Button>
        )}
        {currentUser && currentUser.id !== commentCreatorId && (
          <>
            <Button className="button" handleClick={handleVoteUpButton}>
              Up
              <span>{positive}</span>
            </Button>
            <Button className="button" handleClick={handleVoteDownButton}>
              Down
              <span>{negative}</span>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default React.memo(Comment)
