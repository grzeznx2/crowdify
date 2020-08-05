import React from 'react'

import FormError from '../../FormError/FormError'

import './InputGroup.scss'

import { joinClasses } from '../../../../utils/utils'

export default React.memo(function InputGroup({ onChange, id, name, type, isValid, isTouched, value, modifiers, otherClasses, title, errors }) {
    let validityModifier = isTouched ?
        isValid ? 'valid' : 'invalid'
        : ''

    return (
        <div key={id} className={joinClasses('input', modifiers, otherClasses)}>
            <label htmlFor={id} className="input__label">{title}:</label>
            <input value={value} id={id} name={name} type={type} onChange={onChange} className={joinClasses('input__input', validityModifier)} />
            {
                errors.map(error => <FormError message={error} />)
            }
        </div>
    )
})