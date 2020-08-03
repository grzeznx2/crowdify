import React from 'react'

import { joinClasses } from '../../../../utils/utils'

import './Checkbox.scss'

export default function Checkbox({ onChange, modifiers, id, name, title }) {
    return (

        <div class={joinClasses('checkbox', modifiers)}>
            <input type="checkbox" id={id} name={name} class="checkbox__input" onChange={onChange} />
            <label htmlFor={id} class="checkbox__label">
                <span class="checkbox__button">
                    <svg class="checkbox__icon">
                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                    </svg>
                </span>
                {title}
            </label>
        </div>
        // <div class="checkbox checkbox--on-light-bg">
        //     <input type="checkbox" id="register-agree-terms" class="checkbox__input" />
        //     <label htmlFor="register-agree-terms" class="checkbox__label">
        //         <span class="checkbox__button">
        //             <svg class="checkbox__icon">
        //                 <use xlinkHref="/img/sprite.svg#icon-checkmark" />
        //             </svg>
        //         </span>
        //                          I agree to the terms
        //                       </label>
        // </div>

    )
}