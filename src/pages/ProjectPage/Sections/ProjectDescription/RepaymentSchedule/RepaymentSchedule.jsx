import React from 'react'

import './RepaymentSchedule.scss'

export default function RepaymentSchedule() {
    return (
        <aside class="repayment-schedule">
            <span class="repayment-schedule__title">Sample Repayment Schedule</span>
            <div class="input-group input-group--center-column">
                <label for="repayment-schedule-amount-invested" class="input-group__label">Amount
     invested:</label>
                <input type="number" id="repayment-schedule-amount-invested"
                    class="input-group__input repayment-schedule__input" />
            </div>
            <div class="repayment-schedule__infographic">
                <div class="repayment-schedule__infographic-group">
                    <div class="repayment-schedule__node">
                        <span class="repayment-schedule__date">31.07.2020</span>
                        <div class="repayment-schedule__circle-placeholder"></div>
                        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
                            class="repayment-schedule__circle-container">
                            <circle cx="20" cy="20" r="17" class="repayment-schedule__circle" />
                        </svg>
                        <span class="repayment-schedule__interest">24.5$</span>
                    </div>
                </div>
                <div class="repayment-schedule__infographic-group">
                    <div class="repayment-schedule__bridge-container">
                        <svg viewBox="0 0 10 102" class="repayment-schedule__bridge"
                            xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="102" x2="5" y2="0" class="repayment-schedule__line" />
                        </svg>
                    </div>
                    <div class="repayment-schedule__node">
                        <span class="repayment-schedule__date">31.08.2020</span>
                        <div class="repayment-schedule__circle-placeholder"></div>
                        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
                            class="repayment-schedule__circle-container">
                            <circle cx="20" cy="20" r="17" class="repayment-schedule__circle" />
                        </svg>
                        <span class="repayment-schedule__interest">24.5$</span>
                    </div>
                </div>
                <div class="repayment-schedule__infographic-group">
                    <div class="repayment-schedule__bridge-container">
                        <svg viewBox="0 0 10 102" class="repayment-schedule__bridge"
                            xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="102" x2="5" y2="0" class="repayment-schedule__line" />
                        </svg>
                    </div>
                    <div class="repayment-schedule__node">
                        <span class="repayment-schedule__date">31.08.2020</span>
                        <div class="repayment-schedule__circle-placeholder"></div>
                        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
                            class="repayment-schedule__circle-container">
                            <circle cx="20" cy="20" r="17" class="repayment-schedule__circle" />
                        </svg>
                        <span class="repayment-schedule__interest">24.5$</span>
                    </div>
                </div>
                <div class="repayment-schedule__infographic-group">
                    <div class="repayment-schedule__bridge-container">
                        <svg viewBox="0 0 10 102" class="repayment-schedule__bridge"
                            xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="102" x2="5" y2="0" class="repayment-schedule__line" />
                        </svg>
                    </div>
                    <div class="repayment-schedule__node">
                        <span class="repayment-schedule__date">31.08.2020</span>
                        <div class="repayment-schedule__circle-placeholder"></div>
                        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
                            class="repayment-schedule__circle-container">
                            <circle cx="20" cy="20" r="17" class="repayment-schedule__circle" />
                        </svg>
                        <span class="repayment-schedule__interest">24.5$</span>
                    </div>
                </div>

            </div>
            <div class="repayment-schedule__total">Total repayment: <span
                class="repayment-schedule__total-value">1060.50$</span></div>
        </aside>
    )
}