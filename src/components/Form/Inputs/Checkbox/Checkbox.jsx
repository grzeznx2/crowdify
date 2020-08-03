import React from 'react'

import SvgIcon from '../../../SvgIcon/SvgIcon'

import { joinClasses } from '../../../../utils/utils'

import './Checkbox.scss'

export default function Checkbox({ onChange, modifiers, id, name, title }) {
    return (

        <div class={joinClasses('checkbox', modifiers)}>
            <input type="checkbox" id={id} name={name} class="checkbox__input" onChange={onChange} />
            <label htmlFor={id} class="checkbox__label">
                <span class="checkbox__button">
                    <SvgIcon root='checkbox__icon' svgId='icon-checkmark' />
                </span>
                {title}
            </label>
        </div>
    )
}