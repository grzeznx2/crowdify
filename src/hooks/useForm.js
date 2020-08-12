import { useReducer, useCallback } from 'react'

import useFetch from './useFetch'

import { subscribeInputs, loginInputs, registerInputs, changePasswordInputs, changePersonalDataInputs } from '../components/Form/Forms/Data/formInputs'

import Validator from '../utils/Validator'

const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            const value = action.target.type === "checkbox" ? action.target.checked : action.target.value;
            const { name } = action.target
            const { validators } = state[name]
            const euqalValidator = validators.find(validator => validator.type === 'IS_EQUAL')
            const equalValue = euqalValidator ? state[euqalValidator.value].value : ''
            const { isValid, errors } = Validator.validateAll(validators, value, equalValue)
            return {
                ...state,
                [name]: {
                    ...state[name],
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
        default:
            return state
    }
}

export default function useForm(form) {
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

    const submitRegister = async inputs => {
        const options = {
            url: 'http://localhost:5000/api/v1/users/login',
            method: 'POST',
            body: {
                email: inputs.loginEmail.value,
                password: inputs.loginPassword.value
            },
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
        submitRegister(inputsCopy)
    }

    const handleEditButton = e => {
        e.preventDefault()
        console.log(e.target.dataset.type)
    }

    return { inputs, isLoading, error, handleChange, handleSubmit, handleEditButton }
}