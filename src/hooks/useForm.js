import { useReducer, useCallback, useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import useFetch from './useFetch'

import Validator from '../utils/Validator'

const formReducer = (state, action) => {
  let name
  let id
  switch (action.type) {
    case 'CHANGE_VALUE':
      const value = action.target.type === 'checkbox' ? action.target.checked : action.target.value
      id = action.target.id
      const { validators } = state[id]
      if (!validators) {
        return {
          ...state,
          [id]: {
            ...state[id],
            value,
          },
        }
      }
      const euqalValidator = validators.find(validator => validator.type === 'IS_EQUAL')
      const equalValue = euqalValidator ? state[euqalValidator.value].value : ''
      const { isValid, errors } = Validator.validateAll(validators, value, equalValue)
      return {
        ...state,
        [id]: {
          ...state[id],
          value,
          isValid,
          errors,
          isTouched: true,
        },
      }
    case 'SET_VALIDATED_INPUTS':
      return {
        ...state,
        ...action.inputs,
      }
    case 'START_EDITION':
      id = action.relatedInput
      return {
        ...state,
        [id]: {
          ...state[id],
          isBeingEdited: true,
        },
      }
    case 'ABORT_EDITION':
      id = action.relatedInput
      return {
        ...state,
        [id]: {
          ...state[id],
          isBeingEdited: false,
          value: action.initialValue,
          isValid: true,
          isTouched: false,
          errors: [],
        },
      }
    default:
      return state
  }
}

export default function useForm(form, formInputs) {
  const personalDataRef = useRef({})
  const [inputs, dispatch] = useReducer(formReducer, formInputs)
  const { isLoading, error, sendRequest } = useFetch()
  const [response, setResponse] = useState()
  const params = useParams()
  const currentCommentId = useSelector(state => state.project.currentCommentId)

  useEffect(() => {
    if (form === 'changePersonalData') {
      for (let input of Object.values(inputs)) {
        personalDataRef.current[input.id] = input.value
      }
    }
  }, [])

  const handleChange = useCallback(e => {
    dispatch({ type: 'CHANGE_VALUE', target: e.target })
  }, [])

  const submitForm = async inputs => {
    let url, body, method

    switch (form) {
      case 'login':
        url = '/api/v1/users/login'
        body = {
          email: inputs.loginEmail.value,
          password: inputs.loginPassword.value,
        }
        method = 'POST'
        break
      case 'register':
        url = '/api/v1/users/signup'
        body = {
          email: inputs.registerEmail.value,
          firstName: inputs.registerFirstName.value,
          lastName: inputs.registerLastName.value,
          password: inputs.registerPassword.value,
          passwordConfirm: inputs.registerPasswordConfirm.value,
        }
        method = 'POST'
        break
      case 'addFunds':
        url = '/api/v1/transactions'
        body = {
          amount: +inputs.addFunds.value,
          increaseAccountValue: true,
          type: 'account deposit',
        }
        method = 'POST'
        break
      case 'withdrawFunds':
        url = '/api/v1/transactions'
        body = {
          amount: +inputs.withdrawFunds.value,
          increaseAccountValue: false,
          type: 'funds withdrawal',
        }
        method = 'POST'
        break
      case 'investInProject':
        url = `/api/v1/projects/${params.projectId}/investments`
        body = {
          amount: +inputs.investInProject.value,
        }
        method = 'POST'
        break
      case 'changePersonalData':
        url = '/api/v1/users/updateMe'
        body = inputs
        method = 'PATCH'
        break
      case 'addComment':
        url = `/api/v1/projects/${params.projectId}/comments`
        body = {
          content: inputs.addComment.value,
        }
        method = 'POST'
        break
      case 'editComment':
        url = `/api/v1/comments/${inputs[form].currentCommentId}`
        body = {
          content: inputs[form].value,
        }
        method = 'PATCH'
        break
      case 'deleteComment':
        url = `/api/v1/comments/${inputs[form].currentCommentId}`
        body = null
        method = 'DELETE'
        break
      case 'respondToComment':
        url = `/api/v1/projects/${params.projectId}/comments/${inputs.respondToComment.parentCommentId}`
        body = {
          content: inputs.respondToComment.value,
        }
        method = 'POST'
        break
      default:
        return null
    }

    const options =
      form === 'deleteComment'
        ? {
            url,
            body,
            method,
          }
        : {
            url,
            body,
            method,
            headers: { 'Content-Type': 'application/json' },
          }

    const response = await sendRequest(options)

    if (response || response === null) setResponse(response)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const inputsArray = Object.values(inputs)
    const inputsCopy = { ...inputs }
    let isFormValid = true

    for (let input of inputsArray) {
      if (!input.isValid && input.hasOwnProperty('validators')) {
        isFormValid = false
        const { value, validators, name } = input
        const euqalValidator = validators.find(validator => validator.type === 'IS_EQUAL')
        const equalValue = euqalValidator ? inputsCopy[euqalValidator.value].value : ''
        const { isValid, errors } = Validator.validateAll(validators, value, equalValue)
        inputsCopy[name] = {
          ...inputsCopy[name],
          isValid,
          errors,
        }
      }
    }
    if (!isFormValid) return dispatch({ type: 'SET_VALIDATED_INPUTS', inputs: inputsCopy })
    console.log(isFormValid)
    submitForm(inputsCopy)
  }

  const handleEditButton = e => {
    e.preventDefault()
    const { editAction, relatedInput } = e.target.dataset
    const initialValue = personalDataRef.current[relatedInput]

    switch (editAction) {
      case 'edit':
        return dispatch({ type: 'START_EDITION', relatedInput })
      case 'abort':
        return dispatch({ type: 'ABORT_EDITION', relatedInput, initialValue })
      case 'approve':
        let fieldName = relatedInput.replace('changePersonalData', '')
        fieldName = fieldName.charAt(0).toLowerCase() + fieldName.slice(1)

        const updatedInput = {
          [fieldName]: inputs[relatedInput].value,
        }

        submitForm(updatedInput)
    }
  }

  return { inputs, isLoading, error, response, handleChange, handleSubmit, handleEditButton }
}
