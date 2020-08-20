import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setCurrentUser } from '../../../redux/user/actions'

import Button from '../../Button/Button'

import Validator from '../../../utils/Validator'

import Form from './Form'

import useFormLoading from '../../../hooks/useFormLoading'

export default function LoginForm() {
    const { buttonText, handleLoading } = useFormLoading('search')

    const inputs = {
        transactionsType: {
            title: 'transaction type',
            id: 'transactionsType',
            name: 'type',
            type: 'select',
            value: 'all',
            options: {
                all: 'all',
                investmentInProject: 'investment in project',
                accountDeposit: 'account deposit',
                fundsWithdrawal: 'funds withdrawal',
                interestPaymentForProject: 'interest payment for project',
                fullRepaymentForProject: 'full repayment for project'
            },
            modifiers: 'column select',
        },
        transactionsProject: {
            title: 'project',
            id: 'transactionsProject',
            name: 'projectName',
            type: 'select',
            value: 'all',
            options: {
                all: 'all',
            },
            modifiers: 'column select',
        },
        transactionsPerPage: {
            title: 'per page',
            id: 'transactionsPerPage',
            name: 'limit',
            type: 'select',
            value: 25,
            options: {
                10: 10,
                25: 25,
                50: 50,
            },
            modifiers: 'column select',
        },
    }

    const dispatch = useDispatch()
    const history = useHistory()

    const handleResponse = useCallback(response => {
        console.log(response)
        dispatch(setCurrentUser(response.user))
        history.push('/dashboard/overview')
    }, [dispatch])

    const buttons = <Button modifiers='primary'>{buttonText}</Button>

    return (
        <Form
            formInputs={inputs}
            handleResponse={handleResponse}
            name='filterTransactions'
            formModifiers='filter-transactions'
            buttons={buttons}
            handleLoading={handleLoading} />
    )
}