import React from 'react'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function ChangePasswordForm() {
    const { buttonText, handleLoading } = useFormLoading('save password')

    const inputs = {
        changePasswordCurrent: {
            title: 'current password',
            id: 'changePasswordCurrent',
            name: 'changePasswordCurrent',
            type: 'password',
            value: '',
            isValid: false,
            isTouched: false,
            validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
            errors: [],
            modifiers: 'column'
        },
        changePassword: {
            title: 'password',
            id: 'changePassword',
            name: 'changePassword',
            type: 'password',
            value: '',
            isValid: false,
            isTouched: false,
            validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
            errors: [],
            modifiers: 'column'
        },
        changePasswordConfirm: {
            title: 'confirm password',
            id: 'changePasswordConfirm',
            name: 'changePasswordConfirm',
            type: 'password',
            value: '',
            isValid: false,
            isTouched: false,
            validators: [Validator.minLength(8, 'Password must contain at least 8 characters'),
            Validator.isEqual('changePassword', 'Passwords must be identical')],
            errors: [],
            modifiers: 'column'
        },
    }

    const buttons = <Button modifiers='primary'>{buttonText}</Button>

    return (
        <Form
            formInputs={inputs}
            name='changePassword'
            formModifiers='change-password'
            buttons={buttons}
            handleLoading={handleLoading}
        >
        </Form>
    )
}