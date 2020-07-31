import React, { useReducer } from 'react'

import Button from '../Button/Button'
import RangeSlider from '../Form/Inputs/RangeSlider/RangeSlider'

import './ReturnCalculator.scss'

const initalState = {
    amountInvested: {
        title: 'amount invested',
        id: 'amountInvested',
        value: 2500,
        unit: '€',
        min: 1000,
        max: 10000,
        modifiers: ['bg-white'],
        otherClasses: ['return-calculator__range-slider']
    },
    interestRate: {
        title: 'interest Rate',
        id: 'interestRate',
        value: 22,
        unit: '%',
        min: 10,
        max: 36,
        modifiers: ['bg-white'],
        otherClasses: ['return-calculator__range-slider']
    },
    loanPeriod: {
        title: 'loan period',
        id: 'loanPeriod',
        value: 6,
        unit: 'months',
        min: 1,
        max: 24,
        modifiers: ['bg-white'],
        otherClasses: ['return-calculator__range-slider']
    },
}

const returnCalculatorReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default function ReturnCalculator() {
    const [inputs, dispatch] = useReducer(returnCalculatorReducer, initalState)



    return (
        <div className="return-calculator">
            <h3 className="return-calculator__title heading-3 text-blue-30 text-bold">Calculate Your Returns
                    </h3>
            {
                Object.values(inputs).map(input => {
                    return <RangeSlider
                        {...input} />
                })
            }
            <div className="return-calculator__result-box">
                <span className="return-calculator__result-label">Total Return:</span>
                <span className="return-calculator__result-value">256€</span>
            </div>
            <Button to='/projects' modifiers={['primary']} otherClasses={['return-calculator__button']}>Start Investing</Button>
        </div>
    )
}