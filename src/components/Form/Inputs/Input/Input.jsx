import React from 'react'

import RoundButton from '../../../Button/RoundButton/RoundButton'
import FormError from '../../FormError/FormError'

import './Input.scss'

import { joinClasses } from '../../../../utils/utils'

export default React.memo(function Input({ onChange, hasRoundButtons, id, name, type, isValid, isTouched, value, modifiers, otherClasses, title, min, max, options, step, errors, isBeingEdited, requiresEditStatus, handleEditButton }) {
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
            disabled={!isBeingEdited && requiresEditStatus}
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
                errors && errors.map(error => <FormError message={error} />)
            }
            {
                hasRoundButtons &&
                <div className="input__round-buttons-container">
                    {!isBeingEdited && <RoundButton relatedInput={id} modifiers='edit' editAction='edit' handleClick={handleEditButton} />}
                    {isBeingEdited && <RoundButton relatedInput={id} modifiers='abort' editAction='abort' handleClick={handleEditButton} />}
                    {isBeingEdited && isValid && <RoundButton relatedInput={id} modifiers='accept' editAction='approve' handleClick={handleEditButton} />}
                </div>
            }
        </div>
    )
})