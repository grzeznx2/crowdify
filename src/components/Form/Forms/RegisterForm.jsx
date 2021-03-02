import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { setCurrentUser } from '../../../redux/user/actions'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function LoginForm() {
  const { buttonText, handleLoading } = useFormLoading('register')
  const dispatch = useDispatch()
  const history = useHistory()
  const searchParams = new URLSearchParams(useLocation().search)

  const inputs = {
    registerFirstName: {
      title: 'first name',
      id: 'registerFirstName',
      name: 'registerFirstName',
      type: 'text',
      value: '',
      isValid: false,
      isTouched: false,
      validators: [Validator.isRequired('Name is required')],
      errors: [],
      modifiers: 'column',
    },
    registerLastName: {
      title: 'last name',
      id: 'registerLastName',
      name: 'registerLastName',
      type: 'text',
      value: '',
      isValid: false,
      isTouched: false,
      validators: [Validator.isRequired('Name is required')],
      errors: [],
      modifiers: 'column',
    },
    registerEmail: {
      title: 'email',
      id: 'registerEmail',
      name: 'registerEmail',
      type: 'email',
      value: '',
      isValid: false,
      isTouched: false,
      validators: [Validator.isEmail('Please provide valid email')],
      errors: [],
      modifiers: 'column',
    },
    registerPassword: {
      title: 'password',
      id: 'registerPassword',
      name: 'registerPassword',
      type: 'password',
      value: '',
      isValid: false,
      isTouched: false,
      validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
      errors: [],
      modifiers: 'column',
    },
    registerPasswordConfirm: {
      title: 'confirm password',
      id: 'registerPasswordConfirm',
      name: 'registerPasswordConfirm',
      type: 'password',
      value: '',
      isValid: false,
      isTouched: false,
      validators: [Validator.minLength(8, 'Password must contain at least 8 characters'), Validator.isEqual('registerPassword', 'Passwords must be identical')],
      errors: [],
      modifiers: 'column',
    },
    registerAgreeTerms: {
      title: 'I agree to the terms',
      id: 'registerAgreeTerms',
      name: 'registerAgreeTerms',
      type: 'checkbox',
      value: false,
      isValid: false,
      isTouched: false,
      validators: [Validator.isTruthy('You have to agree to the terms to register')],
      errors: [],
      modifiers: 'column',
    },
  }

  const handleResponse = useCallback(
    response => {
      dispatch(setCurrentUser(response.user))
      const redirectTo = searchParams.get('redirectTo')
      if (redirectTo) history.push(redirectTo)
      else history.push('/dashboard/overview')
    },
    [dispatch]
  )

  const buttons = <Button modifiers="primary">{buttonText}</Button>

  return (
    <Form
      formInputs={inputs}
      handleResponse={handleResponse}
      name="register"
      formModifiers="center-column auth"
      title="create account"
      handleLoading={handleLoading}
      buttons={buttons}
    />
  )
}
