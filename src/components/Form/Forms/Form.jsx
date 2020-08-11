import React from 'react'

import Button from '../../Button/Button'
import FormGroup from '../Inputs/FormGroup/FormGroup'

import useForm from '../../../hooks/useForm'

import { joinClasses } from '../../../utils/utils'

import './Form.scss'

export default function Form({ name, formModifiers, formOtherClasses, containerModifiers, buttonWrapperModifiers, containerOtherClasses, title, buttonText, children }) {

    const { inputs, isLoading, error, handleChange, handleSubmit } = useForm(name)

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
                    Object.values(inputs).map(input => <FormGroup key={input.id} onChange={handleChange} {...input} />)
                }
            </div>
            {children}
            <div className={joinClasses('form__button-wrapper', buttonWrapperModifiers)}>
                <Button modifiers='primary'>{isLoading ? 'Sending...' : buttonText}</Button>
            </div>
        </form>
    )
}