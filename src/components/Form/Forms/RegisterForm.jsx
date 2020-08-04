import React from 'react'

import Form from './Form'

export default function LoginForm() {

    return (
        <Form name='register' formModifiers={['center-column']} containerModifiers={['auth']} title='create account' buttonText='sign up' />
    )
}