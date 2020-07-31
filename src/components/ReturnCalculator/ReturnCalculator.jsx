import React from 'react'

import './ReturnCalculator.scss'

export default function ReturnCalculator() {
    return (
        <div className="return-calculator">
            <h3 className="return-calculator__title heading-3 text-blue-30 text-bold">Calculate Your Returns
                    </h3>
            <div className="return-calculator__range-slider range-slider range-slider--bg-white">
                <label for="amount-invested" className="range-slider__label">Amount Invested:</label>
                <span className="range-slider__value">2,357€</span>
                <div className="range-slider__slider-container">
                    <div className="range-slider__track"></div>
                    <div className="range-slider__range"></div>
                    <input id="amount-invested" type="range" min="1000" max="10000" className="range-slider__input" />
                </div>


            </div>
            <div className="return-calculator__range-slider range-slider range-slider--bg-white">
                <label for="interest-rate" className="range-slider__label">Interest Rate:</label>
                <span className="range-slider__value">22%</span>
                <div className="range-slider__slider-container">
                    <div className="range-slider__track"></div>
                    <div className="range-slider__range"></div>
                    <input id="interest-rate" type="range" min="10" max="30" className="range-slider__input" />
                </div>
            </div>
            <div className="return-calculator__range-slider range-slider range-slider--bg-white">
                <label for="loan-period" className="range-slider__label">Loan Period:</label>
                <span className="range-slider__value">6 months</span>
                <div className="range-slider__slider-container">
                    <div className="range-slider__track"></div>
                    <div className="range-slider__range"></div>
                    <input id="loan-period" type="range" min="2" max="24" className="range-slider__input" />
                </div>
            </div>
            <div className="return-calculator__result-box">
                <span className="return-calculator__result-label">Total Return:</span>
                <span className="return-calculator__result-value">256€</span>
            </div>
            <a href="#" className="return-calculator__button button button--primary">Start Investing</a>
        </div>
    )
}