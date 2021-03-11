import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postCommentRate, updateCommentRate, deleteCommentRate } from '../../../../redux/commentsRates/actions'
import { setFlashMessage } from '../../../../redux/flashMessage/actions'

import Button from '../../../../components/Button/Button'
import SvgIcon from '../../../../components/SvgIcon/SvgIcon'

import './CommentRates.scss'

const CommentRates = ({ commentId, currentUserId, commentCreatorId }) => {
  const dispatch = useDispatch()
  const commentRates = useSelector(state => state.commentsRates.byCommentId[commentId])
  const isLoading = useSelector(state => state.commentsRates.isLoading)
  const error = useSelector(state => state.commentsRates.error)

  useEffect(() => {
    error && dispatch(setFlashMessage('error', error))
  }, [error])

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

  if (commentRates) {
    for (let rate of commentRates) {
      findCurrentUsersVote(rate)
      countVotes(rate)
    }
  }

  const thumbUpModifiers = voted === 'up' ? 'thumb-up-voted' : 'thumb-up'
  const thumbDownModifiers = voted === 'down' ? 'thumb-down-voted' : 'thumb-down'
  const disabled = currentUserId === commentCreatorId || isLoading
  const buttonModifiers = isLoading ? 'loading' : disabled ? 'disabled' : ''

  return (
    <div className="comment-rates">
      <Button root="button-thumb" modifiers={buttonModifiers} disabled={disabled} handleClick={handleVoteUpButton}>
        <SvgIcon svgId="icon-thumbs-up" root="comment-rates__icon" modifiers={thumbUpModifiers} />
        <span>{positiveVotesCount}</span>
      </Button>
      <Button root="button-thumb" modifiers={buttonModifiers} disabled={disabled} handleClick={handleVoteDownButton}>
        <SvgIcon svgId="icon-thumbs-down" root="comment-rates__icon" modifiers={thumbDownModifiers} />
        <span>{negativeVotesCount}</span>
      </Button>
    </div>
  )
}

export default CommentRates
