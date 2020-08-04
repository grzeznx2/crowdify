import React from 'react'

import Button from '../../Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import InputGroup from '../Inputs/InputGroup/InputGroup'

import useForm from '../../../hooks/useForm'

import './Form.scss'

export default function RegisterForm() {

    const { inputs, handleChange, handleSubmit } = useForm('register')

    return (
        <form onSubmit={handleSubmit} class="form form--center-column">
            <h3 class="heading-3 text-blue-20 text-bold form__title">
                Create Account
                  </h3>
            <div class="form__container form__container--auth">
                {
                    Object.values(inputs).map(input => {
                        if (input.type === 'checkbox') return <Checkbox key={input.id} onChange={handleChange} {...input} />
                        return <InputGroup key={input.id} onChange={handleChange} {...input} />
                    })
                }
            </div>
            <Button modifiers={['primary']}>Sign Up</Button>
        </form>
    )
}