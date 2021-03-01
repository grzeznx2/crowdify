import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '../../Button/Button'
import Form from './Form'

import Validator from '../../../utils/Validator'

import useFormLoading from '../../../hooks/useFormLoading'

import { setFlashMessage } from '../../../redux/flashMessage/actions'

export default function CommentForm({ closeModal, currentCommentId }) {
  const { buttonText, handleLoading } = useFormLoading('add comment')
  const dispatch = useDispatch()

  const inputs = {
    leaveComment: {
      //   title: 'amount you would like to add',
      currentCommentId,
      id: 'leaveComment',
      name: 'leaveComment',
      type: 'textarea',
      cols: 80,
      rows: 15,
      // min: 0,
      // step: 10,
      isValid: false,
      isTouched: false,
      // value: 0,
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
    console.log(response)
    console.log(currentCommentId)
    dispatch(setFlashMessage('success', 'Comment was successfully added.'))
  }

  const handleError = error => {
    closeModal()
    dispatch(setFlashMessage('error', error.message))
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
