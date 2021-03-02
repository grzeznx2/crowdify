import React from 'react'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function LoginForm({ handleResponse, handleError }) {
  const { buttonText, handleLoading } = useFormLoading('register')

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

  const buttons = <Button modifiers="primary">{buttonText}</Button>

  return (
    <Form
      formInputs={inputs}
      handleError={handleError}
      handleResponse={handleResponse}
      handleLoading={handleLoading}
      name="register"
      formModifiers="center-column auth"
      title="create account"
      buttons={buttons}
    />
  )
}
