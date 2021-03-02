import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '../../Button/Button'
import Form from './Form'

import Validator from '../../../utils/Validator'

import useFormLoading from '../../../hooks/useFormLoading'

import { setFlashMessage } from '../../../redux/flashMessage/actions'
import { setNewComment } from '../../../redux/project/actions'

export default function CommentForm({ closeModal }) {
  const { buttonText, handleLoading } = useFormLoading('add comment')
  const dispatch = useDispatch()

  const inputs = {
    leaveComment: {
      id: 'leaveComment',
      name: 'leaveComment',
      type: 'textarea',
      cols: 80,
      rows: 15,
      isValid: false,
      isTouched: false,
      validators: [Validator.isRequired('Comment can not be empty!')],
      errors: [],
      modifiers: 'column on-blue-bg center-input-text',
      formGroupModifiers: '',
    },
  }

  const cancel = e => {
    e.preventDefault()
    closeModal()
  }

  const buttons = (
    <>
      <Button handleClick={cancel} modifiers="secondary">
        cancel
      </Button>
      <Button modifiers="secondary">{buttonText}</Button>
    </>
  )

  const handleResponse = response => {
    closeModal()
    dispatch(setNewComment(response.comment))
    dispatch(setFlashMessage('success', 'Comment was successfully added.'))
  }

  const handleError = error => {
    closeModal()
    dispatch(setFlashMessage('error', error))
  }

  return (
    <Form
      formInputs={inputs}
      handleResponse={handleResponse}
      handleError={handleError}
      handleLoading={handleLoading}
      name="leaveComment"
      formModifiers="modal"
      buttons={buttons}
    ></Form>
  )
}
