import React, { useState, useCallback } from 'react'

import Validator from '../../../utils/Validator'

import Button from '../../Button/Button'
import Form from './Form'

export default function LoginForm() {
    const [buttonText, setButtonText] = useState('subscribe')

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


    const handleLoading = useCallback(isLoading => {
        if (isLoading) setButtonText('sending...')
    }, [])

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
