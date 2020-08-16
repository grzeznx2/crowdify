import React from 'react'

import Validator from '../../../utils/Validator'

import Form from './Form'

export default function LoginForm() {
    const inputs = {
        subscribeName: {
            title: 'name',
            id: 'subscribeName',
            name: 'subscribeName',
            type: 'text',
            value: '',
            isValid: false,
            isTouched: false,
            validators: [Validator.isRequired('Name is required')],
            errors: [],
            modifiers: 'column'
        },
        subscribeEmail: {
            title: 'email',
            id: 'subscribeEmail',
            name: 'subscribeEmail',
            type: 'email',
            value: '',
            isValid: false,
            isTouched: false,
            validators: [Validator.isEmail('Please provide valid email')],
            errors: [],
            modifiers: 'column'
        },
    }

    return (
        <Form formInputs={inputs} name='subscribe' formModifiers='center-column' containerModifiers='subscribe' buttonText='subscribe' />
    )
}
