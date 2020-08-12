import React from 'react'

import RoundButton from '../../../Button/RoundButton/RoundButton'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import RangeSlider from '../RangeSlider/RangeSlider'

import { joinClasses } from '../../../../utils/utils'

import './FormGroup.scss'

export default function FormGroup({ type, formGroupModifiers, hasRoundButtons, ...otherProps }) {

    let markup = null

    switch (type) {
        case 'text':
        case 'select':
        case 'email':
        case 'number':
        case 'password':
            markup = <Input type={type} {...otherProps} />
            break;
        case 'checkbox':
            markup = <Checkbox type={type} {...otherProps} />
            break;
        case 'range':
            markup = <RangeSlider type={type} {...otherProps} />
            break;
        default:
            return null
    }

    return (
        <div className={joinClasses('form-group', formGroupModifiers)}>
            {
                markup
            }
            {
                hasRoundButtons &&
                <div className="input-group__round-buttons-container">
                    <RoundButton modifiers='edit' />
                    <RoundButton modifiers='abort' />
                    <RoundButton modifiers='accept' />
                </div>
            }
        </div>
    )
}