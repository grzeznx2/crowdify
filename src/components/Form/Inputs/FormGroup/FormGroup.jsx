import React from 'react'

import Checkbox from '../Checkbox/Checkbox'
import InputGroup from '../InputGroup/InputGroup'
import RangeSlider from '../RangeSlider/RangeSlider'

import { joinClasses } from '../../../../utils/utils'

import './FormGroup.scss'

export default function FormGroup({ type, formGroupModifiers, ...otherProps }) {

    let markup = null

    switch (props.type) {
        case 'text':
        case 'select':
        case 'email':
        case 'password':
            markup = <InputGroup type={type} {...otherProps} />
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
        </div>
    )
}