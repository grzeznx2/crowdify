import React, { useReducer } from 'react'

import Checkbox from '../Inputs/Checkbox/Checkbox'
import InputGroup from '../Inputs/InputGroup/InputGroup'
import Validator from '../../../utils/Validator'

import './Form.scss'

const initialState = {
    registerFirsName: {
        title: 'first name',
        id: 'registerFirsName',
        name: 'registerFirsName',
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
        validators: [Validator.minLength('Password must contain at least 8 characters')],
        errors: [],
        modifiers: ['column']
    },
    registerAgreeTerms: {
        title: 'I agree to the terms',
        id: 'registerAgreeTerms',
        name: 'registerAgreeTerms',
        type: 'checkbox',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired('You have to agree to the terms to register')],
        errors: [],
        modifiers: ['column']
    },
}

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

export default function RegisterForm() {

    const [inputs, dispatch] = useReducer(formReducer, initialState)

    return (
        <form action="#" class="form form--center-column">
            <h3 class="heading-3 text-blue-20 text-bold form__title">
                Create Account
                  </h3>
            <div class="form__container form__container--auth">
                {
                    inputs.map(input => {
                        if (input.type === 'checkbox') return <Checkbox {...input} />
                        return <InputGroup {...input} />
                    })
                }
            </div>

            <button class="button button--primary">Sign Up</button>
        </form>
    )
}