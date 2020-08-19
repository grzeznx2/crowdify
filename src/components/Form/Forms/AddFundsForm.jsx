import React from 'react'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function AddFundsForm({ closeModal }) {
    const { buttonText, handleLoading } = useFormLoading('add funds')

    const inputs = {
        addFunds: {
            title: 'amount you would like to add',
            id: 'addFunds',
            name: 'addFunds',
            type: 'number',
            min: 0,
            step: 10,
            isValid: false,
            isTouched: false,
            value: 0,
            validators: [Validator.isGreaterThanZero('Amount must be greater than 0')],
            errors: [],
            modifiers: 'column on-blue-bg center-input-text',
            formGroupModifiers: ''
        },
    }

    const cancel = e => {
        e.preventDefault()
        console.log('ELO')
        closeModal()
    }

    const buttons =
        <>
            <Button handleClick={cancel} modifiers='secondary'>cancel</Button>
            <Button modifiers='secondary'>{buttonText}</Button>
        </>

    const handleResponse = response => {
        console.log(response)
    }

    return (
        <Form
            formInputs={inputs}
            handleResponse={handleResponse}
            handleLoading={handleLoading}
            name='addFunds'
            formModifiers='modal'
            buttons={buttons}
        >
        </Form>
    )
}