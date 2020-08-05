import React, { useState, useReducer } from 'react'

import FormGroup from '../Form/Inputs/FormGroup/FormGroup'

import './Filtration.scss'

const filtrationInputs = {
    filtrationStatusAll: {
        title: 'all',
        id: 'filtrationStatusAll',
        name: 'filtrationStatus',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusActive: {
        title: 'active',
        id: 'filtrationStatusActive',
        name: 'filtrationStatus',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusComing: {
        title: 'coming',
        id: 'filtrationStatusComing',
        name: 'filtrationStatus',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusFunded: {
        title: 'funded',
        id: 'filtrationStatusFunded',
        name: 'filtrationStatus',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusRepaid: {
        title: 'repaid',
        id: 'filtrationStatusRepaid',
        name: 'filtrationStatus',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeBusiness: {
        title: 'business',
        id: 'filtrationTypeBusiness',
        name: 'filtrationType',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeLogistics: {
        title: 'logistics',
        id: 'filtrationTypeLogistics',
        name: 'filtrationType',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeEnergy: {
        title: 'energy',
        id: 'filtrationTypeEnergy',
        name: 'filtrationType',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeSme: {
        title: 'sme',
        id: 'filtrationTypeSme',
        name: 'filtrationType',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeTechnology: {
        title: 'technology',
        id: 'filtrationTypeTechnology',
        name: 'filtrationType',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeRealEstate: {
        title: 'real estate',
        id: 'filtrationTypeRealEstate',
        name: 'filtrationType',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeEntertainment: {
        title: 'entertainment',
        id: 'filtrationTypeEntertainment',
        name: 'filtrationType',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationSort: {
        title: 'sort by',
        id: 'filtrationSort',
        name: 'filtrationSort',
        type: 'select',
        options: {
            interestRate: 'Interest Rate',
            duration: 'Duration',
            interestPaymentsRate: 'Interest Payments Rate'
        },
        modifiers: 'column on-blue-bg',
        formGroupModifiers: ''
    },
    filtrationInterestRate: {
        title: 'interest rate',
        id: 'filtrationInterestRate',
        name: 'filtrationInterestRate',
        type: 'range',
        multipleRanges: true,
        min: 10,
        max: 36,
        firstValue: 16,
        secondValue: 26,
        unit: '%',
        modifiers: '',
        formGroupModifiers: ''
    },
    filtrationTargetMin: {
        title: 'min. target',
        id: 'filtrationTargetMin',
        name: 'filtrationTargetMin',
        type: 'number',
        min: 0,
        step: 10,
        value: 10000,
        modifiers: 'column on-blue-bg',
        formGroupModifiers: ''
    },
    filtrationTargetMax: {
        title: 'max. target',
        id: 'filtrationTargetMax',
        name: 'filtrationTargetMax',
        type: 'number',
        min: 0,
        step: 10,
        value: 250000,
        modifiers: 'column on-blue-bg',
        formGroupModifiers: ''
    },
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            const value = action.target.type === "checkbox" ? action.target.checked : action.target.value;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                }
            }
        default:
            return state
    }
}

export default function Filtration() {
    const [interestRate, setInterestRate] = useState({
        title: 'interest rate',
        id: 'filtrationInterestRate',
        name: 'filtrationInterestRate',
        type: 'range',
        multipleRanges: true,
        min: 10,
        max: 36,
        firstValue: 16,
        secondValue: 26,
        unit: '%',
        isValid: true,
        isTouched: false,
        validators: [],
        errors: [],
        modifiers: '',
        formGroupModifiers: ''
    })

    const handleInterestRate = e => {
        if (e.target.id === 'filtrationInterestRateLeft') {
            const val = Math.min(e.target.value, interestRate.secondValue - 1)
            setInterestRate(
                {
                    ...interestRate,
                    firstValue: val
                }
            )
        } else {
            const val = Math.max(interestRate.firstValue + 1, e.target.value)
            setInterestRate(
                {
                    ...interestRate,
                    secondValue: val
                }
            )
        }
    }

    return (
        <div className="filtration">
            <div className="container">
                <div className="filtration__container">
                    <div className="filtration__box filtration__box--status">
                        <fieldset className="filtration__fieldset">
                            <legend className="filtration__legend">Status:</legend>
                            <div className="filtration__fields">
                                {
                                    Object
                                        .values(filtrationInputs)
                                        .filter(input => input.name === 'filtrationStatus')
                                        .map(input => <FormGroup key={input.id} {...input} />)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div className="filtration__box filtration__box--type">
                        <fieldset className="filtration__fieldset">
                            <legend className="filtration__legend">Type:</legend>
                            <div className="filtration__fields">
                                {
                                    Object
                                        .values(filtrationInputs)
                                        .filter(input => input.name === 'filtrationType')
                                        .map(input => <FormGroup key={input.id} {...input} />)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div className="filtration__box filtration__box--sort">
                        <FormGroup key={filtrationInputs.filtrationSort.id}  {...filtrationInputs.filtrationSort} />
                        <FormGroup key={interestRate.id} onChange={handleInterestRate}  {...interestRate} />
                        <div className="input-group">
                            <div className="range-slider">
                                <label className="range-slider__label">Duration:</label>
                                <div className="range-slider__outputs">
                                    <span className="range-slider__output">1m</span>
                           -
                           <span className="range-slider__output">24m</span>
                                </div>
                                <div className="range-slider__slider-container">
                                    <input type="range" min='1' max='24' value='3'
                                        className="range-slider__input range-slider__input--left" />
                                    <input type="range" min='1' max='24' value='16'
                                        className="range-slider__input range-slider__input--right" />
                                    <div className="range-slider__track"></div>
                                    <div className="range-slider__range range-slider__range--multi"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="filtration__box filtration__box--target">
                        <FormGroup key={filtrationInputs.filtrationTargetMin.id}  {...filtrationInputs.filtrationTargetMin} />
                        <FormGroup key={filtrationInputs.filtrationTargetMax.id}  {...filtrationInputs.filtrationTargetMax} />
                        <div className="filtration-group filtration__button-wrapper">
                            <a href="#" className="button button--info">Search Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
