import React, { useReducer, useCallback } from 'react'

import Button from '../../Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import InputGroup from '../Inputs/InputGroup/InputGroup'
import Validator from '../../../utils/Validator'

import useForm from '../../../hooks/useForm'

import './Form.scss'

export default function LoginForm() {
    const { inputs, handleChange, handleSubmit } = useForm('login')

    return (
        <form onSubmit={handleSubmit} class="form form--center-column">
            <h3 class="heading-3 text-blue-20 text-bold form__title">
                Sign In
            </h3>
            <div class="form__container form__container--auth">
                {
                    Object.values(inputs).map(input => {
                        if (input.type === 'checkbox') return <Checkbox key={input.id} onChange={handleChange} {...input} />
                        return <InputGroup key={input.id} onChange={handleChange} {...input} />
                    })
                }
            </div>
            <a href="#" class="form__forgot-password-link">Forgot your password?</a>
            <Button modifiers={['primary']}>Sign In</Button>
        </form>
    )
}