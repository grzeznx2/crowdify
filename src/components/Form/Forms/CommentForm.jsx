import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '../../Button/Button'
import Form from './Form'

import Validator from '../../../utils/Validator'

import useFormLoading from '../../../hooks/useFormLoading'

import { setFlashMessage } from '../../../redux/flashMessage/actions'
import { addNewComment, respondToComment, editComment, deleteComment } from '../../../redux/project/actions'

export default function CommentForm({ closeModal, formName, parentCommentId, currentCommentId, currentCommentContent }) {
  const dispatchCommentMessage = action => dispatch(setFlashMessage('success', `Comment was successfully ${action}.`))

  const initialValues = {
    addComment: {
      buttonText: 'add',
      actions: response => {
        dispatch(addNewComment(response.comment))
        dispatchCommentMessage('added')
      },
    },
    deleteComment: {
      buttonText: 'delete',
      actions: () => {
        dispatch(deleteComment(currentCommentId))
        dispatchCommentMessage('deleted')
      },
    },
    respondToComment: {
      buttonText: 'respond',
      actions: response => {
        dispatch(respondToComment({ newComment: response.comment, parentCommentId }))
        dispatchCommentMessage('added')
      },
    },
    editComment: {
      buttonText: 'edit',
      actions: response => {
        dispatch(editComment(response.comment))
        dispatchCommentMessage('edited')
      },
    },
  }
  const { buttonText, handleLoading } = useFormLoading(initialValues[formName].buttonText)
  const dispatch = useDispatch()

  const inputs =
    formName === 'deleteComment'
      ? {
          [formName]: {
            id: formName,
            name: formName,
            currentCommentId,
            modifiers: 'column on-red-bg center-input-text',
            formGroupModifiers: '',
          },
        }
      : {
          [formName]: {
            id: formName,
            name: formName,
            parentCommentId,
            currentCommentId,
            value: currentCommentContent,
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
    initialValues[formName].actions(response)
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
      name={formName}
      formModifiers="modal"
      buttons={buttons}
    ></Form>
  )
}
