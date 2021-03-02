import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { setCurrentUser } from '../../../redux/user/actions'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function LoginForm() {
  const { buttonText, handleLoading } = useFormLoading('login')
  const dispatch = useDispatch()
  const history = useHistory()
  const searchParams = new URLSearchParams(useLocation().search)

  const inputs = {
    loginEmail: {
      title: 'email',
      id: 'loginEmail',
      name: 'loginEmail',
      type: 'email',
      value: '',
      isValid: false,
      isTouched: false,
      validators: [Validator.isEmail('Please provide a valid email')],
      errors: [],
      modifiers: 'column',
    },
    loginPassword: {
      title: 'password',
      id: 'loginPassword',
      name: 'loginPassword',
      type: 'password',
      value: '',
      isValid: false,
      isTouched: false,
      validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
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
      name="login"
      formModifiers="center-column auth"
      title="sign in"
      buttons={buttons}
      handleLoading={handleLoading}
      children
    >
      <a href="#" class="form__forgot-password-link">
        Forgot your password?
      </a>
    </Form>
  )
}
