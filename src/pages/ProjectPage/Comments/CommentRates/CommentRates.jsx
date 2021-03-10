import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postCommentRate, updateCommentRate, deleteCommentRate } from '../../../../redux/commentsRates/actions'

import Button from '../../../../components/Button/Button'

const CommentRates = ({ commentId, currentUserId }) => {
  const dispatch = useDispatch()
  const commentRates = useSelector(state => state.commentsRates.byCommentId[commentId])

  let positiveVotesCount = 0
  let negativeVotesCount = 0
  let voted = ''
  let rateId = ''

  const handleVotedButton = async isPositive => {
    if (!rateId) dispatch(postCommentRate(isPositive, commentId))
    else if (isPositive) {
      if (voted === 'up') dispatch(deleteCommentRate(rateId, commentId))
      else if (voted === 'down') dispatch(updateCommentRate(isPositive, rateId))
    } else {
      if (voted === 'up') dispatch(updateCommentRate(isPositive, rateId))
      else if (voted === 'down') dispatch(deleteCommentRate(rateId, commentId))
    }
  }

  const handleVoteUpButton = () => handleVotedButton(true)
  const handleVoteDownButton = () => handleVotedButton(false)

  const findCurrentUsersVote = rate => {
    if (rate.user === currentUserId) {
      rateId = rate._id
      if (rate.isPositive) voted = 'up'
      if (!rate.isPositive) voted = 'down'
    }
  }

  const countVotes = rate => {
    if (rate.isPositive) positiveVotesCount++
    else negativeVotesCount++
  }

  for (let rate of commentRates) {
    findCurrentUsersVote(rate)
    countVotes(rate)
  }

  return (
    <>
      <Button className="button" handleClick={handleVoteUpButton}>
        Up
        <span>{positiveVotesCount}</span>
      </Button>
      <Button className="button" handleClick={handleVoteDownButton}>
        Down
        <span>{negativeVotesCount}</span>
      </Button>
    </>
  )
}

export default CommentRates
