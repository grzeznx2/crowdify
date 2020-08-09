import React from 'react'

import './DataBox.scss'

import { joinClasses } from '../../utils/utils'

export default function DataBox({ modifiers, otherClasses, title, value }) {
    return (
        <div className={joinClasses('data-box', modifiers, otherClasses)}>
            <div className="data-box__title-box">
                <h5 className="heading-5 data-box__title">{title}</h5>
            </div>
            <div className="data-box__content-box">
                <span className="data-box__value">{value}</span>
            </div>
        </div>
    )
}