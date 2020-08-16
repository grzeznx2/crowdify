import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setCurrentUser } from '../../../redux/user/actions'

import Form from './Form'

export default function LoginForm() {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleResponse = useCallback(response => {
        dispatch(setCurrentUser(response.user))
        history.push('/dashboard/overview')
    }, [dispatch])

    return (
        <Form handleResponse={handleResponse} name='login' formModifiers='center-column' containerModifiers='auth' title='sign in' buttonText='sign in' children>
            <a href="#" class="form__forgot-password-link">Forgot your password?</a>
        </Form>
    )
}