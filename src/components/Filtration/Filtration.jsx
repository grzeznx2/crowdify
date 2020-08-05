import React from 'react'

import FormGroup from '../Form/Inputs/FormGroup/FormGroup'

import './Filtration.scss'

const filtrationInputs = {
    filtrationStatus: {
        filtrationStatusAll: {
            title: 'all',
            id: 'filtrationStatusAll',
            name: 'filtrationStatus',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationStatusActive: {
            title: 'active',
            id: 'filtrationStatusActive',
            name: 'filtrationStatus',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationStatusComing: {
            title: 'coming',
            id: 'filtrationStatusComing',
            name: 'filtrationStatus',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationStatusFunded: {
            title: 'funded',
            id: 'filtrationStatusFunded',
            name: 'filtrationStatus',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationStatusRepaid: {
            title: 'repaid',
            id: 'filtrationStatusRepaid',
            name: 'filtrationStatus',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
    },
    filtrationType: {
        filtrationTypeBusiness: {
            title: 'business',
            id: 'filtrationTypeBusiness',
            name: 'filtrationType',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationTypeLogistics: {
            title: 'logistics',
            id: 'filtrationTypeLogistics',
            name: 'filtrationType',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationTypeEnergy: {
            title: 'energy',
            id: 'filtrationTypeEnergy',
            name: 'filtrationType',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationTypeSme: {
            title: 'sme',
            id: 'filtrationTypeSme',
            name: 'filtrationType',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationTypeTechnology: {
            title: 'technology',
            id: 'filtrationTypeTechnology',
            name: 'filtrationType',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationTypeRealEstate: {
            title: 'real estate',
            id: 'filtrationTypeRealEstate',
            name: 'filtrationType',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
        filtrationTypeEntertainment: {
            title: 'entertainment',
            id: 'filtrationTypeEntertainment',
            name: 'filtrationType',
            type: 'checkbox',
            value: false,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'on-dark-bg',
            formGroupModifiers: 'filtration-checkbox'
        },
    },
    filtrationSort: {
        filtrationSortBy: {
            title: 'sort by',
            id: 'filtrationSortBy',
            name: 'filtrationSortBy',
            type: 'select',
            options: {
                interestRate: 'Interest Rate',
                duration: 'Duration',
                interestPaymentsRate: 'Interest Payments Rate'
            },
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'column on-blue-bg',
            formGroupModifiers: ''
        },
    },
    filtrationTarget: {
        filtrationTargetMin: {
            title: 'min. target',
            id: 'filtrationTargetMin',
            name: 'filtrationTargetMin',
            type: 'number',
            min: 0,
            step: 10,
            value: 10000,
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
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
            isValid: true,
            isTouched: false,
            validators: [],
            errors: [],
            modifiers: 'column on-blue-bg',
            formGroupModifiers: ''
        },
    }
}

export default function Filtration() {
    return (
        <div className="filtration">
            <div className="container">
                <div className="filtration__container">
                    <div className="filtration__box filtration__box--status">
                        <fieldset className="filtration__fieldset">
                            <legend className="filtration__legend">Status:</legend>
                            <div className="filtration__fields">
                                {
                                    Object.values(filtrationInputs.filtrationStatus).map(input => <FormGroup key={input.id} {...input} />)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div className="filtration__box filtration__box--type">
                        <fieldset className="filtration__fieldset">
                            <legend className="filtration__legend">Type:</legend>
                            <div className="filtration__fields">
                                {
                                    Object.values(filtrationInputs.filtrationType).map(input => <FormGroup key={input.id}  {...input} />)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div className="filtration__box filtration__box--sort">
                        <FormGroup key={filtrationInputs.filtrationSort.filtrationSortBy.id}  {...filtrationInputs.filtrationSort.filtrationSortBy} />
                        <div className="input-group">
                            <div className="range-slider">
                                <label className="range-slider__label">Interest Rate:</label>
                                <div className="range-slider__outputs">
                                    <span className="range-slider__output">12%</span>
                           -
                           <span className="range-slider__output">26%</span>
                                </div>
                                <div className="range-slider__slider-container">
                                    <input type="range" min='10' max='32' value='16'
                                        className="range-slider__input range-slider__input--left" />
                                    <input type="range" min='10' max='32' value='26'
                                        className="range-slider__input range-slider__input--right" />
                                    <div className="range-slider__track"></div>
                                    <div className="range-slider__range range-slider__range--multi"></div>
                                </div>
                            </div>

                        </div>
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
                        {
                            Object.values(filtrationInputs.filtrationTarget).map(input => <FormGroup key={input.id} {...input} />)
                        }
                        <div className="filtration-group filtration__button-wrapper">
                            <a href="#" className="button button--info">Search Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}