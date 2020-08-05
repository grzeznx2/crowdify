import React from 'react'

import Checkbox from '../Form/Inputs/Checkbox/Checkbox'

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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
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
            modifiers: 'on-dark-bg'
        },
    },
}

export default function Filtration() {
    return (
        <div class="filtration">
            <div class="container">
                <div class="filtration__container">
                    <div class="filtration__box filtration__box--status">
                        <fieldset class="filtration__fieldset">
                            <legend class="filtration__legend">Status:</legend>
                            <div class="filtration__fields">
                                {
                                    Object.values(filtrationInputs.filtrationStatus).map(input => <div class="filtration__field" key={input.id}>
                                        <Checkbox {...input} />
                                    </div>)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div class="filtration__box filtration__box--type">
                        <fieldset class="filtration__fieldset">
                            <legend class="filtration__legend">Type:</legend>
                            <div class="filtration__fields">
                                {
                                    Object.values(filtrationInputs.filtrationType).map(input => <div class="filtration__field" key={input.id}>
                                        <Checkbox {...input} />
                                    </div>)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div class="filtration__box filtration__box--sort">
                        <div class="input-group input-group--column input-group--on-blue-bg">
                            <label for="filtration-sort" class="input-group__label">Sort by:</label>
                            <select id="filtration-sort" name="filtration-sort" type="select" class="input-group__input">
                                <option value="interest-rate">Interest Rate</option>
                                <option value="duration">Duration</option>
                                <option value="payments-rate">Payments Rate</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <div class="range-slider">
                                <label class="range-slider__label">Interest Rate:</label>
                                <div class="range-slider__outputs">
                                    <span class="range-slider__output">12%</span>
                           -
                           <span class="range-slider__output">26%</span>
                                </div>
                                <div class="range-slider__slider-container">
                                    <input type="range" min='10' max='32' value='16'
                                        class="range-slider__input range-slider__input--left" />
                                    <input type="range" min='10' max='32' value='26'
                                        class="range-slider__input range-slider__input--right" />
                                    <div class="range-slider__track"></div>
                                    <div class="range-slider__range range-slider__range--multi"></div>
                                </div>
                            </div>

                        </div>
                        <div class="input-group">
                            <div class="range-slider">
                                <label class="range-slider__label">Duration:</label>
                                <div class="range-slider__outputs">
                                    <span class="range-slider__output">1m</span>
                           -
                           <span class="range-slider__output">24m</span>
                                </div>
                                <div class="range-slider__slider-container">
                                    <input type="range" min='1' max='24' value='3'
                                        class="range-slider__input range-slider__input--left" />
                                    <input type="range" min='1' max='24' value='16'
                                        class="range-slider__input range-slider__input--right" />
                                    <div class="range-slider__track"></div>
                                    <div class="range-slider__range range-slider__range--multi"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="filtration__box filtration__box--target">
                        <div class="input-group input-group--column input-group--on-blue-bg">
                            <label for="filtration-min-target" class="input-group__label">Min. Target:</label>
                            <input id="filtration-min-target" type="number" class="input-group__input" min="0" step="10" />
                        </div>
                        <div class="input-group input-group--column input-group--on-blue-bg">
                            <label for="filtration-max-target" class="input-group__label">Max. Target:</label>
                            <input id="filtration-max-target" type="number" class="input-group__input" min="0" step="10" />
                        </div>
                        <div class="filtration-group filtration__button-wrapper">
                            <a href="#" class="button button--info">Search Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}