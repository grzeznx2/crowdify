import React from 'react'

import './ImportGroup.scss'

import { joinClasses } from '../../../../utils/utils'

export default function InputGroup({ id, name, isValid, isTouched, modifiers, otherClasses, title }) {
    let validityModifier = isTouched ?
        isValid ? 'valid' : 'invalid'
        : ''

    return (
        <div className={joinClasses('input-group', modifiers, otherClasses)}>
            <label for={id} className="input-group__label">{title}</label>
            <input id={id} name={name} type="text" className={joinClasses('input-group__input', [validityModifier])} />
        </div>
    )
}

{/* <div className="error">
<svg className="error__icon">
    <use xlinkHref='/img/sprite.svg#icon-circle-with-cross' />
</svg>
<span className="error__message">Name is required.</span>
</div> */}