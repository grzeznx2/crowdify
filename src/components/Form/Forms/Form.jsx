import React, { useEffect } from 'react'

import Button from '../../Button/Button'
import FormGroup from '../Inputs/FormGroup/FormGroup'

import useForm from '../../../hooks/useForm'

import { joinClasses } from '../../../utils/utils'

import './Form.scss'

export default function Form({ formInputs, buttons, name, formModifiers, formOtherClasses, title, children, handleResponse, handleLoading }) {

    const { inputs, isLoading, error, response, handleChange, handleSubmit, handleEditButton } = useForm(name, formInputs)

    useEffect(() => {
        if (response) handleResponse(response)
    },
        [response])

    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])

    return (
        <form onSubmit={handleSubmit} className={joinClasses('form', formModifiers, formOtherClasses)}>
            {
                title ?
                    <h3 className="heading-3 text-blue-20 text-bold form__title">
                        Sign In</h3>
                    : null
            }
            <div className='form__container'>
                {
                    Object.values(inputs).map(input => <FormGroup handleEditButton={handleEditButton} key={input.id} onChange={handleChange} {...input} />)
                }
            </div>
            {children}
            {buttons}
        </form>
    )
}