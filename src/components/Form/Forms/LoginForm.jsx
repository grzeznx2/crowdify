import React from 'react'

import Form from './Form'

export default function LoginForm() {

    return (
        <Form name='login' formModifiers={['center-column']} containerModifiers={['auth']} title='sign in' buttonText='sign in' children>
            <a href="#" class="form__forgot-password-link">Forgot your password?</a>
        </Form>
    )
}