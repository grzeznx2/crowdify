import { useReducer, useCallback } from 'react'

import { subscribeInputs, loginInputs, registerInputs } from '../components/Form/Forms/Data/formInputs'

const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            const { name, value } = action.target
            const { validators } = state[name]
            const { isValid, errors } = Validator.validateAll(validators, value)
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