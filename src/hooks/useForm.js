import { useReducer, useCallback } from 'react'

import { subscribeInputs, loginInputs, registerInputs } from '../components/Form/Forms/Data/formInputs'

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
            default:
                return console.log('Please call useForm with either "subscribe", "login" or "register".')
        }
    }

    const [inputs, dispatch] = useReducer(formReducer, loadState(form))


    const handleChange = useCallback(e => {
        dispatch({ type: 'CHANGE_VALUE', target: e.target })
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const inputsArray = Object.values(inputs)
        const isFormValid = inputsArray.every(input => input.isValid)
        if (isFormValid) {
            for (let input of inputsArray) {
                console.log(`${input.name}: ${input.value}`)
            }
        }
    }

    return { inputs, handleChange, handleSubmit }
}