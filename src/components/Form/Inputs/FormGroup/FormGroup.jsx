import React from 'react'

import Checkbox from '../Checkbox/Checkbox'
import InputGroup from '../InputGroup/InputGroup'
import RangeSlider from '../RangeSlider/RangeSlider'

import './FormGroup.scss'

export default function FormGroup(props) {

    let markup = null

    switch (props.type) {
        case 'text':
        case 'select':
        case 'email':
        case 'password':
            markup = <InputGroup {...props} />
            break;
        case 'checkbox':
            markup = <Checkbox {...props} />
            break;
        case 'range':
            markup = <RangeSlider {...props} />
            break;
        default:
            return null
    }

    return (
        <div className="form-group">
            {
                markup
            }
        </div>
    )
}