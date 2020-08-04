import React, { useReducer, useCallback } from 'react'

import Button from '../../Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import InputGroup from '../Inputs/InputGroup/InputGroup'
import Validator from '../../../utils/Validator'

import './Form.scss'

const initialState = {
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
        modifiers: ['column']
    },
    registerPassword: {
        title: 'password',
        id: 'registerPassword',
        name: 'registerPassword',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength('Password must contain at least 8 characters')],
        errors: [],
        modifiers: ['column']
    },
}

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

export default function LoginForm() {
    const [inputs, dispatch] = useReducer(formReducer, initialState)

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
    return (
        <form onSubmit={handleSubmit} class="form form--center-column">
            <h3 class="heading-3 text-blue-20 text-bold form__title">
                Sign In
            </h3>
            <div class="form__container form__container--auth">
                {
                    Object.values(inputs).map(input => {
                        if (input.type === 'checkbox') return <Checkbox key={input.id} onChange={handleChange} {...input} />
                        return <InputGroup key={input.id} onChange={handleChange} {...input} />
                    })
                }
            </div>
            <a href="#" class="form__forgot-password-link">Forgot your password?</a>
            <Button modifiers={['primary']}>Sign In</Button>
        </form>
    )
}