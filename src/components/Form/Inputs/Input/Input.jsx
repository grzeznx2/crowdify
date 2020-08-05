import React from 'react'

import FormError from '../../FormError/FormError'

import './Input.scss'

import { joinClasses } from '../../../../utils/utils'

export default React.memo(function InputGroup({ onChange, id, name, type, isValid, isTouched, value, modifiers, otherClasses, title, min, max, options, step, errors }) {
    let validityModifier = isTouched ?
        isValid ? 'valid' : 'invalid'
        : ''

    let inputMarkup

    if (type === 'select') {
        inputMarkup = <select
            value={value}
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            className={joinClasses('input__input', validityModifier)}>
            {
                Object.keys(options).map(option => {
                    const value = option
                    const text = options[option]
                    return <option value={value}>{text}</option>
                })
            }
        </select>

    } else {
        inputMarkup = <input
            value={value}
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            className={joinClasses('input__input', validityModifier)} />
    }

    return (
        <div
            key={id}
            className={joinClasses('input', modifiers, otherClasses)}>
            <label
                htmlFor={id}
                className="input__label">{title}:</label>
            {
                inputMarkup
            }
            {
                errors.map(error => <FormError message={error} />)
            }
        </div>
    )
})