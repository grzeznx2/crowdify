import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../../../hooks/useFetch'

import Button from '../../../../components/Button/Button'

const CommentRates = ({ commentId, currentUserId }) => {
  const { isLoading, error, sendRequest } = useFetch()
  const commentRates = useSelector(state => state.commentsRates.byCommentId[commentId])
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

  for (let rate of commentRates) {
    if (rate.user === currentUserId) {
      rateID = rate._id
      if (rate.isPositive) voted = 'up'
      if (!rate.isPositive) voted = 'down'
    }
    if (rate.isPositive) positive++
    else negative++
  }

  return (
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
  )
}

export default CommentRates
