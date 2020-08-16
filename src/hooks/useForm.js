import { useReducer, useCallback, useRef } from 'react'

import useFetch from './useFetch'

import { subscribeInputs, loginInputs, registerInputs, changePasswordInputs, changePersonalDataInputs } from '../components/Form/Forms/Data/formInputs'

import Validator from '../utils/Validator'

const formReducer = (state, action) => {

    let name
    let id
    switch (action.type) {
        case 'CHANGE_VALUE':
            const value = action.target.type === "checkbox" ? action.target.checked : action.target.value;
            id = action.target.id
            const { validators } = state[id]
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
                    isTouched: true
                }
            }
        case 'SET_VALIDATED_INPUTS':

            return {
                ...state,
                ...action.inputs
            }
        case 'START_EDITION':
            id = action.relatedInput
            return {
                ...state,
                [id]: {
                    ...state[id],
                    isBeingEdited: true
                }
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
                    errors: []
                }
            }
        default:
            return state
    }
}

export default function useForm(form) {
    const personalDataRef = useRef({})

    const loadState = form => {

        switch (form) {
            case 'subscribe':
                return subscribeInputs
            case 'login':
                return loginInputs
            case 'register':
                return registerInputs
            case 'changePassword':
                return changePasswordInputs
            case 'changePersonalData':
                for (let input of Object.values(changePersonalDataInputs)) {
                    personalDataRef.current[input.id] = input.value
                }
                return changePersonalDataInputs
            default:
                return console.log('Please call useForm with either "subscribe", "login" or "register".')
        }
    }

    const [inputs, dispatch] = useReducer(formReducer, loadState(form))
    const { isLoading, error, sendRequest } = useFetch()

    const handleChange = useCallback(e => {
        dispatch({ type: 'CHANGE_VALUE', target: e.target })
    }, [])

    const submitForm = async inputs => {

        let url, body

        switch (form) {
            case 'login':
                url = 'http://localhost:5000/api/v1/users/login'
                body = {
                    email: inputs.loginEmail.value,
                    password: inputs.loginPassword.value
                }
                break
            case 'register':
                url = 'http://localhost:5000/api/v1/users/signup'
                body = {
                    email: inputs.registerEmail.value,
                    firstName: inputs.registerfirstName.value,
                    lastName: inputs.registerLastName.value,
                    password: inputs.registerPassword.value,
                    passwordConfrim: inputs.registerPasswordConfrim.value,
                }
            default:
                return null
        }

        const options = {
            url,
            body,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }

        await sendRequest(options)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const inputsArray = Object.values(inputs)
        const inputsCopy = { ...inputs }
        let isFormValid = true

        for (let input of inputsArray) {
            if (!input.isValid) {
                isFormValid = false
                const { value, validators, name } = input
                const euqalValidator = validators.find(validator => validator.type === 'IS_EQUAL')
                const equalValue = euqalValidator ? inputsCopy[euqalValidator.value].value : ''
                const { isValid, errors } = Validator.validateAll(validators, value, equalValue)
                inputsCopy[name] = {
                    ...inputsCopy[name],
                    isValid,
                    errors
                }
            }
        }

        if (!isFormValid) return dispatch({ type: 'SET_VALIDATED_INPUTS', inputs: inputsCopy })
        submitForm(inputsCopy)
    }

    const handleEditButton = e => {
        e.preventDefault()
        const { editAction, relatedInput } = e.target.dataset
        const initialValue = personalDataRef.current[relatedInput]

        switch (editAction) {
            case 'edit':
                return dispatch({ type: 'START_EDITION', relatedInput, })
            case 'abort':
                return dispatch({ type: 'ABORT_EDITION', relatedInput, initialValue })

        }
    }

    return { inputs, isLoading, error, handleChange, handleSubmit, handleEditButton }
}