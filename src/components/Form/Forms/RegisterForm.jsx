import React, { useReducer, useCallback } from 'react'

import Button from '../../Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import InputGroup from '../Inputs/InputGroup/InputGroup'
import Validator from '../../../utils/Validator'

import './Form.scss'

const initialState = {
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
        modifiers: ['column']
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
        modifiers: ['column']
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
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
        errors: [],
        modifiers: ['column']
    },
    registerPasswordConfirm: {
        title: 'confirm password',
        id: 'registerPasswordConfirm',
        name: 'registerPasswordConfirm',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
        errors: [],
        modifiers: ['column']
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
        modifiers: ['column']
    },
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            const value = action.target.type === "checkbox" ? action.target.checked : action.target.value;
            const { name } = action.target
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

export default function RegisterForm() {

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
                Create Account
                  </h3>
            <div class="form__container form__container--auth">
                {
                    Object.values(inputs).map(input => {
                        if (input.type === 'checkbox') return <Checkbox onChange={handleChange} {...input} />
                        return <InputGroup onChange={handleChange} {...input} />
                    })
                }
            </div>
            <Button modifiers={['primary']}>Sign Up</Button>
        </form>
    )
}