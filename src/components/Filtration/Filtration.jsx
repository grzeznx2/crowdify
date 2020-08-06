import React, { useReducer, useEffect } from 'react'

import Button from '..//Button/Button'
import FormGroup from '../Form/Inputs/FormGroup/FormGroup'

import useFetch from '../../hooks/useFetch'

import './Filtration.scss'

const initialState = {
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
    filtrationDuration: {
        title: 'duration',
        id: 'filtrationDuration',
        name: 'filtrationDuration',
        type: 'range',
        multipleRanges: true,
        min: 1,
        max: 36,
        firstValue: 3,
        secondValue: 12,
        unit: 'months',
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

const filtrationReducer = (state, { type, target }) => {
    switch (type) {
        case 'CHANGE_VALUE':
            const value = target.type === "checkbox" ? target.checked : target.value;
            const { id } = target
            return {
                ...state,
                [id]: {
                    ...state[id],
                    value,
                }
            }
        case 'CHANGE_MULTI_RANGE_VALUE':
            const { valueType } = target.dataset
            let rangeValue;
            if (valueType === 'firstValue') rangeValue = Math.min(target.value, state.filtrationInterestRate.secondValue - 1)
            else rangeValue = Math.max(target.value, state.filtrationInterestRate.firstValue + 1)
            return {
                ...state,
                [target.name]: {
                    ...state[target.name],
                    [valueType]: rangeValue
                }
            }
        default:
            return state
    }
}

export default function Filtration({ onSearch }) {
    const [filtrationInputs, dispatch] = useReducer(filtrationReducer, initialState)
    const { fetchState, sendRequest } = useFetch()

    useEffect(() => {
        onSearch(fetchState)
    }, [onSearch, fetchState])

    const handleChange = e => {
        const { target } = e
        if (target.dataset.rangeType === 'multi') dispatch({ type: 'CHANGE_MULTI_RANGE_VALUE', target })
        else dispatch({ type: 'CHANGE_VALUE', target })

    }

    const handleSubmit = async e => {
        e.preventDefault()
        const options = {
            url: 'http://localhost:5000/api/v1/projects'
        }
        await sendRequest(options)
    }

    return (
        <form onSubmit={handleSubmit} className="filtration">
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
                                        .map(input => <FormGroup onChange={handleChange} key={input.id} {...input} />)
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
                                        .map(input => <FormGroup onChange={handleChange} key={input.id} {...input} />)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div className="filtration__box filtration__box--sort">
                        <FormGroup key={filtrationInputs.filtrationSort.id} onChange={handleChange}  {...filtrationInputs.filtrationSort} />
                        <FormGroup key={filtrationInputs.filtrationInterestRate.id} onChange={handleChange}  {...filtrationInputs.filtrationInterestRate} />
                        <FormGroup key={filtrationInputs.filtrationDuration.id} onChange={handleChange}  {...filtrationInputs.filtrationDuration} />
                    </div>
                    <div className="filtration__box filtration__box--target">
                        <FormGroup key={filtrationInputs.filtrationTargetMin.id} onChange={handleChange}  {...filtrationInputs.filtrationTargetMin} />
                        <FormGroup key={filtrationInputs.filtrationTargetMax.id} onChange={handleChange}  {...filtrationInputs.filtrationTargetMax} />
                        <div className="filtration-group filtration__button-wrapper">
                            <Button modifiers='info'>Search Projects</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
