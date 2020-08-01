import React, { useReducer, useCallback } from 'react'

import Button from '../../Button/Button'
import InputGroup from '../Inputs/InputGroup/InputGroup'

import Validator from '../../../utils/Validator'

import './Form.scss'

const initialState = {
    subscribeName: {
        title: 'name',
        id: 'subscribeName',
        name: 'subscribeName',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired('Name is required')],
        errors: [],
        modifiers: ['column']
    },
    subscribeEmail: {
        title: 'email',
        id: 'subscribeEmail',
        name: 'subscribeEmail',
        type: 'email',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isEmail('Please provide valid email')],
        errors: [],
        modifiers: ['column']
    },
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            const { name, value } = action.target
            const { validators } = state[name]
            const { isValid, errors } = Validator.validateAll(validators, value)
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    isValid,
                    errors,
                    isTouched: true
                }
            }
        default:
            return state
    }
}



export default function Form() {
    const [inputs, dispatch] = useReducer(formReducer, initialState)

    const handleChange = useCallback(e => {
        dispatch({ type: 'CHANGE_VALUE', target: e.target })
    }, [])

    return (
        <form action="#" className="form">
            <div className="form__container form__container--subscribe">
                {
                    Object.values(inputs).map(input => <InputGroup onChange={handleChange} key={input.id} {...input} />)
                }
            </div>
            <div className="form__button-wrapper">
                <Button to='/' modifiers={['primary']}>subscribe</Button>
            </div>
        </form>
    )
}
