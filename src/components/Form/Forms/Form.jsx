import React, { useCallback } from 'react'

import Button from '../../Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import InputGroup from '../Inputs/InputGroup/InputGroup'

import useForm from '../../../hooks/useForm'

import { joinClasses } from '../../../utils/utils'

import './Form.scss'

export default function Form({ name, formModifiers, formOtherClasses, containerModifiers, containerOtherClasses, title, buttonText, children }) {
    console.log(name)

    const { inputs, fetchState, handleChange, handleSubmit } = useForm(name)

    const createInputs = useCallback(inputs => Object.values(inputs).map(input => {
        if (input.type === 'checkbox') return <Checkbox key={input.id} onChange={handleChange} {...input} />
        return <InputGroup key={input.id} onChange={handleChange} {...input} />
    }), [])

    return (
        <form onSubmit={handleSubmit} className={joinClasses('form', formModifiers, formOtherClasses)}>
            {
                title ?
                    <h3 className="heading-3 text-blue-20 text-bold form__title">
                        Sign In</h3>
                    : null
            }
            <div className={joinClasses('form__container', containerModifiers, containerOtherClasses)}>
                {
                    createInputs(inputs)
                }
            </div>
            {children}
            <Button modifiers='primary'>{fetchState.isLoading ? 'Sending...' : buttonText}</Button>
        </form>
    )
}