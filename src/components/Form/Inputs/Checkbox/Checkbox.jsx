import React from 'react'

import FormError from '../../FormError/FormError'
import SvgIcon from '../../../SvgIcon/SvgIcon'

import { joinClasses } from '../../../../utils/utils'

import './Checkbox.scss'

export default React.memo(function Checkbox({ onChange, modifiers, otherClasses, id, name, title, isValid, isTouched, errors, value }) {
    return (

        <div key={id} className={joinClasses('checkbox', modifiers, otherClasses)}>
            <input type="checkbox" checked={value} id={id} name={name} className="checkbox__input" onChange={onChange} />
            <label htmlFor={id} className="checkbox__label">
                <span className="checkbox__button">
                    <SvgIcon root='checkbox__icon' svgId='icon-checkmark' />
                </span>
                {title}
            </label>
            {
                errors.map(error => <FormError message={error} />)
            }
        </div>
    )
})