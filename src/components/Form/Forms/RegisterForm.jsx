import React, { useCallback } from 'react'

import Form from './Form'

export default function LoginForm() {

    const setResponse = useCallback(response => {
        console.log(response)
    }, [])

    return (
        <Form setResponse={setResponse} name='register' formModifiers='center-column' containerModifiers='auth' title='create account' buttonText='sign up' />
    )
}