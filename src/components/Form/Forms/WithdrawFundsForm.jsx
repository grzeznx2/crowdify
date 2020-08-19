import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '../../Button/Button'
import Form from './Form'

import Validator from '../../../utils/Validator'

import useFormLoading from '../../../hooks/useFormLoading'

import { setFlashMessage } from '../../../redux/flashMessage/actions'

export default function WithdrawFundsForm({ closeModal }) {
    const { buttonText, handleLoading } = useFormLoading('withdraw')
    const dispatch = useDispatch()

    const inputs = {
        withdrawFunds: {
            title: 'amount you would like to withdraw',
            id: 'withdrawFunds',
            name: 'withdrawFunds',
            type: 'number',
            min: 0,
            step: 10,
            isValid: false,
            isTouched: false,
            value: 0,
            validators: [Validator.isGreaterThanZero('Amount must be greater than 0')],
            errors: [],
            modifiers: 'column on-red-bg center-input-text',
            formGroupModifiers: ''
        },
    }

    const cancel = e => {
        e.preventDefault()
        closeModal()
    }

    const buttons =
        <>
            <Button handleClick={cancel} modifiers='secondary text-warning'>cancel</Button>
            <Button modifiers='secondary text-warning'>{buttonText}</Button>
        </>

    const handleResponse = response => {
        closeModal()
        dispatch(setFlashMessage('success', 'Funds were successfully sent to your bank account.'))
    }

    const handleError = error => {
        closeModal()
        dispatch(setFlashMessage('error', error.message))
    }

    return (
        <Form
            formInputs={inputs}
            handleResponse={handleResponse}
            handleError={handleError}
            handleLoading={handleLoading}
            name='withdrawFunds'
            formModifiers='modal'
            buttons={buttons}
        >
        </Form>
    )
}