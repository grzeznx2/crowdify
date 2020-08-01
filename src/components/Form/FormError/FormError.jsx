import React from 'react'

import SvgIcon from '../../SvgIcon/SvgIcon'

import './FormError.scss'

export default function FormError({ message }) {
    return (
        <div className="form-error">
            <SvgIcon root='form-error__icon' svgId='icon-circle-with-cross' />
            {/* <svg className="form-error__icon">
                <use xlinkHref='/img/sprite.svg#icon-circle-with-cross' />
            </svg> */}
            <span className="form-error__message">{message}.</span>
        </div>
    )
}