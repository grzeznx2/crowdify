import React from 'react'

import FormError from '../../FormError/FormError'

import './InputGroup.scss'

import { joinClasses } from '../../../../utils/utils'

export default function InputGroup({ onChange, id, name, type, isValid, isTouched, modifiers, otherClasses, title, errors }) {
    let validityModifier = isTouched ?
        isValid ? 'valid' : 'invalid'
        : ''

    return (
        <div className={joinClasses('input-group', modifiers, otherClasses)}>
            <label htmlFor={id} className="input-group__label">{title}:</label>
            <input id={id} name={name} type={type} onChange={onChange} className={joinClasses('input-group__input', [validityModifier])} />
            {
                errors.map(error => <FormError message={error} />)
            }
        </div>
    )
}

{/* <div className="error">
<svg className="error__icon">
    <use xlinkHref='/img/sprite.svg#icon-circle-with-cross' />
</svg>
<span className="error__message">Name is required.</span>
</div> */}