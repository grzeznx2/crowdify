import React from 'react'

import './Checkbox.scss'

export default function Checkbox() {
    return (

        <div class="checkbox checkbox--on-light-bg">
            <input type="checkbox" id="register-agree-terms" class="checkbox__input" />
            <label htmlFor="register-agree-terms" class="checkbox__label">
                <span class="checkbox__button">
                    <svg class="checkbox__icon">
                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                    </svg>
                </span>
                                 I agree to the terms
                              </label>
        </div>

    )
}