import React, { useReducer } from 'react'

import Button from '..//Button/Button'
import FormGroup from '../Form/Inputs/FormGroup/FormGroup'

import './Filtration.scss'

const initialState = {
    filtrationStatusAll: {
        title: 'all',
        id: 'filtrationStatusAll',
        name: 'status',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusActive: {
        title: 'active',
        id: 'filtrationStatusActive',
        name: 'status',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusComing: {
        title: 'coming',
        id: 'filtrationStatusComing',
        name: 'status',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusFunded: {
        title: 'funded',
        id: 'filtrationStatusFunded',
        name: 'status',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationStatusRepaid: {
        title: 'repaid',
        id: 'filtrationStatusRepaid',
        name: 'status',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeBusiness: {
        title: 'business',
        id: 'filtrationTypeBusiness',
        name: 'type',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeLogistics: {
        title: 'logistics',
        id: 'filtrationTypeLogistics',
        name: 'type',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeEnergy: {
        title: 'energy',
        id: 'filtrationTypeEnergy',
        name: 'type',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeSme: {
        title: 'sme',
        id: 'filtrationTypeSme',
        name: 'type',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeTechnology: {
        title: 'technology',
        id: 'filtrationTypeTechnology',
        name: 'type',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeRealEstate: {
        title: 'real estate',
        id: 'filtrationTypeRealEstate',
        name: 'type',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationTypeEntertainment: {
        title: 'entertainment',
        id: 'filtrationTypeEntertainment',
        name: 'type',
        type: 'checkbox',
        value: false,
        modifiers: 'on-dark-bg',
        formGroupModifiers: 'filtration-checkbox'
    },
    filtrationSort: {
        title: 'sort by',
        id: 'filtrationSort',
        name: 'sort',
        type: 'select',
        value: 'interestRate',
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
        name: 'interestRate',
        type: 'range',
        multipleRanges: true,
        min: 10,
        max: 36,
        firstValue: 16,
        secondValue: 26,
        unit: '%',
        modifiers: '',
        formGroupModifiers: 'filtration-range-slider'
    },
    filtrationDuration: {
        title: 'duration',
        id: 'filtrationDuration',
        name: 'duration',
        type: 'range',
        multipleRanges: true,
        min: 1,
        max: 36,
        firstValue: 3,
        secondValue: 12,
        unit: 'months',
        modifiers: '',
        formGroupModifiers: 'filtration-range-slider'
    },
    filtrationTargetMin: {
        title: 'min. target',
        id: 'filtrationTargetMin',
        name: 'minTarget',
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
        name: 'maxTarget',
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
            const { valueType, idCopy } = target.dataset
            let rangeValue;
            if (valueType === 'firstValue') rangeValue = Math.min(target.value, state.filtrationInterestRate.secondValue - 1)
            else rangeValue = Math.max(target.value, state.filtrationInterestRate.firstValue + 1)
            return {
                ...state,
                [idCopy]: {
                    ...state[idCopy],
                    [valueType]: rangeValue
                }
            }
        default:
            return state
    }
}

export default React.memo(function Filtration({ handleFilter }) {
    const [filtrationInputs, dispatch] = useReducer(filtrationReducer, initialState)

    const handleChange = e => {
        const { target } = e
        if (target.dataset.rangeType === 'multi') dispatch({ type: 'CHANGE_MULTI_RANGE_VALUE', target })
        else dispatch({ type: 'CHANGE_VALUE', target })

    }

    const filter = e => {
        e.preventDefault()
        const filterObj = {}

        Object.defineProperty(filterObj, 'queryString', {
            get: function () {
                return `${Object.values(this).join('&')}`
            }
        })

        for (let input of Object.values(filtrationInputs)) {
            const { name, title, value, firstValue, secondValue } = input
            switch (name) {
                case 'status':
                    if (value) {
                        filterObj[name] = filterObj[name] ? filterObj[name].concat(`,${title.replace(' ', '_')}`) : `status=${title.replace(' ', '_')}`
                    }
                    break;
                case 'type':
                    if (value) {
                        filterObj[name] = filterObj[name] ? filterObj[name].concat(`,${title.replace(' ', '_')}`) : `type=${title.replace(' ', '_')}`
                    }
                    break;
                case 'sort':
                    filterObj.sort = `sort=${value}`
                    break
                case 'minTarget':
                    filterObj.minTarget = `totalTarget[gte]=${value}`
                    break
                case 'maxTarget':
                    filterObj.maxTarget = `totalTarget[lte]=${value}`
                    break
                case 'duration':
                    filterObj.duration = `duration[gte]=${firstValue}&duration[lte]=${secondValue}`
                    break
                case 'interestRate':
                    filterObj.interestRate = `interestRate[gte]=${firstValue}&interestRate[lte]=${secondValue}`
                    break
            }
        }

        handleFilter(filterObj.queryString)
    }

    return (
        <form onSubmit={filter} className="filtration">
            <div className="container">
                <div className="filtration__container">
                    <div className="filtration__box filtration__box--status">
                        <fieldset className="filtration__fieldset">
                            <legend className="filtration__legend">Status:</legend>
                            <div className="filtration__fields">
                                {
                                    Object
                                        .values(filtrationInputs)
                                        .filter(input => input.name === 'status')
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
                                        .filter(input => input.name === 'type')
                                        .map(input => <FormGroup onChange={handleChange} key={input.id} {...input} />)
                                }
                            </div>
                        </fieldset>
                    </div>
                    <div className="filtration__box filtration__box--sort">
                        <FormGroup
                            key={filtrationInputs.filtrationSort.id}
                            onChange={handleChange}
                            {...filtrationInputs.filtrationSort} />
                        <FormGroup
                            key={filtrationInputs.filtrationInterestRate.id}
                            onChange={handleChange}
                            {...filtrationInputs.filtrationInterestRate} />
                        <FormGroup
                            key={filtrationInputs.filtrationDuration.id}
                            onChange={handleChange}
                            {...filtrationInputs.filtrationDuration} />
                    </div>
                    <div className="filtration__box filtration__box--target">
                        <FormGroup
                            key={filtrationInputs.filtrationTargetMin.id}
                            onChange={handleChange}
                            {...filtrationInputs.filtrationTargetMin} />
                        <FormGroup key={filtrationInputs.filtrationTargetMax.id}
                            onChange={handleChange}
                            {...filtrationInputs.filtrationTargetMax} />
                        <div className="filtration-group filtration__button-wrapper">
                            <Button modifiers='info'>Search Projects</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
})
