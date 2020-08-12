import React from 'react'

import Button from '../../Button/Button'
import FormGroup from '../Inputs/FormGroup/FormGroup'

import useForm from '../../../hooks/useForm'

import { joinClasses } from '../../../utils/utils'

import './Form.scss'

export default function Form({ name, formModifiers, formOtherClasses, containerModifiers, buttonWrapperModifiers, containerOtherClasses, title, buttonText, children }) {

    const { inputs, isLoading, error, handleChange, handleSubmit, handleEditButton } = useForm(name)

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
                    Object.values(inputs).map(input => <FormGroup handleEditButton={handleEditButton} key={input.id} onChange={handleChange} {...input} />)
                }
            </div>
            {children}
            {
                buttonText &&
                <div className={joinClasses('form__button-wrapper', buttonWrapperModifiers)}>
                    <Button modifiers='primary'>{isLoading ? 'Sending...' : buttonText}</Button>
                </div>
            }
        </form>
    )
}