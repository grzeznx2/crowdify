import React from 'react'

import SvgIcon from '../../SvgIcon/SvgIcon'

import './FormError.scss'

export default function FormError({ message }) {
    return (
        <div className="form-error">
            <SvgIcon root='form-error__icon' svgId='icon-circle-with-cross' />
            <span className="form-error__message">{message}.</span>
        </div>
    )
}