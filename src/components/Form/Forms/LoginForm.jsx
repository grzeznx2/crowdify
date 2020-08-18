import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setCurrentUser } from '../../../redux/user/actions'

import Validator from '../../../utils/Validator'

import Form from './Form'

export default function LoginForm() {
    const inputs = {
        loginEmail: {
            title: 'email',
            id: 'loginEmail',
            name: 'loginEmail',
            type: 'email',
            value: '',
            isValid: false,
            isTouched: false,
            validators: [Validator.isEmail('Please provide a valid email')],
            errors: [],
            modifiers: 'column'
        },
        loginPassword: {
            title: 'password',
            id: 'loginPassword',
            name: 'loginPassword',
            type: 'password',
            value: '',
            isValid: false,
            isTouched: false,
            validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
            errors: [],
            modifiers: 'column'
        },
    }

    const dispatch = useDispatch()
    const history = useHistory()

    const handleResponse = useCallback(response => {
        console.log(response)
        dispatch(setCurrentUser(response.user))
        history.push('/dashboard/overview')
    }, [dispatch])

    return (
        <Form
            formInputs={inputs}
            handleResponse={handleResponse}
            name='login'
            formModifiers='center-column auth'
            title='sign in'
            buttonText='sign in'
            children>
            <a href="#" class="form__forgot-password-link">Forgot your password?</a>
        </Form>
    )
}