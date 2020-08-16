import React, { useCallback } from 'react'

import Form from './Form'

export default function LoginForm() {

    const setResponse = useCallback(response => {
        console.log(response)
    }, [])

    return (
        <Form setResponse={setResponse} name='login' formModifiers='center-column' containerModifiers='auth' title='sign in' buttonText='sign in' children>
            <a href="#" class="form__forgot-password-link">Forgot your password?</a>
        </Form>
    )
}