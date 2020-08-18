import React from 'react'

import Validator from '../../../utils/Validator'

import Button from '../../Button/Button'
import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function LoginForm() {
    const { buttonText, handleLoading } = useFormLoading('subscribe')

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

    const buttons = <Button modifiers='primary'>{buttonText}</Button>

    return (
        <Form
            formInputs={inputs}
            name='subscribe'
            formModifiers='center-column subscribe'
            buttons={buttons}
            handleLoading={handleLoading}
        />
    )
}
