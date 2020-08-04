import React from 'react'

import Button from '../../Button/Button'
import InputGroup from '../Inputs/InputGroup/InputGroup'

import useForm from '../../../hooks/useForm'

import './Form.scss'

export default function Form() {
    const { inputs, handleChange, handleSubmit } = useForm('subscribe')

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__container form__container--subscribe">
                {
                    Object.values(inputs).map(input => <InputGroup onChange={handleChange} key={input.id} {...input} />)
                }
            </div>
            <div className="form__button-wrapper">
                <Button modifiers={['primary']}>subscribe</Button>
            </div>
        </form>
    )
}
