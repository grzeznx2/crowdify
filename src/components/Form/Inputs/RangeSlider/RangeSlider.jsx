import React from 'react'

import { joinClasses } from '../../../../utils/utils'

import './RangeSlider.scss'

export default function RangeSlider({ id, title, value, unit, min, max, modifiers, otherClasses }) {
    return (
        <div key={id} className={joinClasses('range-slider', modifiers, otherClasses)}>
            <label htmlFor={id} className="range-slider__label">{title}</label>
            <span className="range-slider__value">{value} {unit}</span>
            <div className="range-slider__slider-container">
                <div className="range-slider__track"></div>
                <div className="range-slider__range"></div>
                <input id={id} type="range" min={min} max={max} value={value} className="range-slider__input" />
            </div>
        </div>
    )
}