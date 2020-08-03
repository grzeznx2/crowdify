import React from 'react'

import Checkbox from '../Inputs/Checkbox/Checkbox'
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
}

export default function RegisterForm() {
    return (
        <form action="#" class="form form--center-column">
            <h3 class="heading-3 text-blue-20 text-bold form__title">
                Create Account
                  </h3>
            <div class="form__container form__container--auth">
                <div class="input-group input-group--column">
                    <label htmlFor="register-first-name" class="input-group__label">First Name:</label>
                    <input id="register-first-name" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-last-name" class="input-group__label">Last Name:</label>
                    <input id="register-last-name" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-email" class="input-group__label">Email:</label>
                    <input id="register-email" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-password" class="input-group__label">Password:</label>
                    <input id="register-password" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-confirm-password" class="input-group__label">Confirm
                           Password:</label>
                    <input id="register-confirm-password" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <div class="form__checkbox-container">
                        <Checkbox />
                    </div>
                </div>
            </div>

            <button class="button button--primary">Sign Up</button>
        </form>
    )
}