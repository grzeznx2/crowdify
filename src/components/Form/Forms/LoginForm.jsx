import React from 'react'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function LoginForm({ handleResponse }) {
  const { buttonText, handleLoading } = useFormLoading('login')

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
