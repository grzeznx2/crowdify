import React from 'react'

import { joinClasses } from '../../../../utils/utils'

import './RangeSlider.scss'

export default React.memo(function RangeSlider({ id, name, title, value, unit, min, max, modifiers, otherClasses, onChange, multipleRanges, firstValue, secondValue }) {

    const calcLeftPosition = function () {
        const value = Math.min(firstValue, secondValue - 1)
        const percent = ((value - min) / (max - min)) * 100
        return `${percent}%`
    }

    const calcRightPosition = function () {
        const value = Math.max(firstValue + 1, secondValue)
        const percent = ((value - min) / (max - min)) * 100
        return `${(100 - percent)}%`
    }

    let rangeMarkup

    if (multipleRanges) {
        rangeMarkup =
            <>
                <label className="range-slider__label">{title}</label>
                <div className="range-slider__outputs">
                    <span className="range-slider__output">{firstValue}{unit}</span>
                           &nbsp;-&nbsp;
                    <span className="range-slider__output">{secondValue}{unit}</span>
                </div>
                <div className="range-slider__slider-container">
                    <div className="range-slider__track"></div>
                    <div
                        style={{
                            left: calcLeftPosition(),
                            right: calcRightPosition(),

                        }}
                        className="range-slider__range range-slider__range--multi"></div>
                    <input
                        id={`${id}Left`}
                        type="range"
                        min={min}
                        max={max}
                        value={firstValue}
                        name={name}
                        className="range-slider__input range-slider__input--left"
                        onChange={onChange}
                        data-value-type='firstValue'
                        data-range-type='multi'
                        data-id-copy={id} />
                    <input
                        id={`${id}Right`}
                        type="range"
                        min={min}
                        max={max}
                        value={secondValue}
                        name={name}
                        className="range-slider__input range-slider__input--right"
                        onChange={onChange}
                        data-value-type='secondValue'
                        data-range-type='multi'
                        data-id-copy={id} />
                </div>
            </>
    } else {
        rangeMarkup =
            <>
                <label htmlFor={id} className="range-slider__label">{title}</label>
                <span className="range-slider__value">{value} {unit}</span>
                <div className="range-slider__slider-container">
                    <div className="range-slider__track"></div>
                    <div style={{
                        width: `${((value - min) / (max - min)) * 100}%`
                    }} className="range-slider__range"></div>
                    <input id={id} type="range" min={min} max={max} value={value} name={name} className="range-slider__input" onChange={onChange} />
                </div>
            </>
    }

    return (
        <div className={joinClasses('range-slider', modifiers, otherClasses)}>
            {
                rangeMarkup
            }
        </div>
    )
})