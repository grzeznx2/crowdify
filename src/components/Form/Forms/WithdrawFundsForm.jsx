import React from 'react'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function WithdrawFundsForm({ handleClick }) {
    const { buttonText, handleLoading } = useFormLoading('withdraw')

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
        console.log('ELO')
        handleClick()
    }

    const buttons =
        <>
            <Button handleClick={cancel} modifiers='secondary text-warning'>cancel</Button>
            <Button modifiers='secondary text-warning'>{buttonText}</Button>
        </>

    const handleResponse = () => { }

    return (
        <Form
            formInputs={inputs}
            handleResponse={handleResponse}
            handleLoading={handleLoading}
            name='withdrawFunds'
            formModifiers='modal'
            buttons={buttons}
        >
        </Form>
    )
}