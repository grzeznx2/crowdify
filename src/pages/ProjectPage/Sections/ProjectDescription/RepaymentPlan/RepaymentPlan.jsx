import React, { useState } from 'react';

import FormGroup from '../../../../../components/Form/Inputs/FormGroup/FormGroup';

import './RepaymentPlan.scss';

export default function RepaymentPlan({
  duration,
  interestPaymentsStart,
  interestPaymentsRate,
  interestRate,
  interestsDates,
  endDate,
}) {
  const [value, setValue] = useState(1000);

  const interestsObj = {
    duration,
    interestPaymentsStart,
    interestPaymentsRate,
    interestRate,
    interestsDates,
    endDate,
    value,


    calcInterestsDistribution() {
      const interestsDistribution = {};
      interestsDistribution.first = this.interestPaymentsStart / this.duration;
      interestsDistribution.remaining = this.interestPaymentsRate / this.duration;
      this.interestsDistribution = interestsDistribution
      return this
    },

    calcInterestsAmount() {
      this.interestsAmount = (this.value * (this.interestRate / 100) * (this.duration / 12)).toFixed(2) * 1
      return this
    },

    createInterests() {
      this.interests = this.interestsDates.map((date, i) => ({
        date,
        amount: i === 0 ?
          (this.interestsAmount * this.interestsDistribution.first).toFixed(2) * 1
          : (this.interestsAmount * this.interestsDistribution.remaining).toFixed(2) * 1,
      }));
      return this
    },

    calcTotalRepayment() {
      this.totalRepayment = this.interestsAmount + this.value
      return this
    },

    createPlan() {
      this
        .calcInterestsDistribution()
        .calcInterestsAmount()
        .createInterests()
        .calcTotalRepayment()
    }

  }

  const changeValue = (e) => {
    const { value } = e.target;
    setValue(value * 1);
  };

  interestsObj.createPlan()

  return (
    <aside class="repayment-plan">
      <span class="repayment-plan__title">Sample Repayment Plan</span>
      <div className="repayment-plan__input">
        <FormGroup
          value={value}
          onChange={changeValue}
          type="number"
          min={0}
          title="amount invested"
          modifiers="column repayment-plan"
          id="repaymentPlan"
          name="repaymentPlan"
          step={10}
        />
      </div>
      <div class="repayment-plan__infographic">
        {
          [endDate, ...interestsObj.interests].map((value, i) => {
            const bridgeMarkup =
              <div class="repayment-plan__bridge-container">
                <svg
                  viewBox="0 0 10 102"
                  class="repayment-plan__bridge"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="5"
                    y1="102"
                    x2="5"
                    y2="0"
                    class="repayment-plan__line" />
                </svg>
              </div>

            const dateMarkup = i > 0 ? value.date.split('T')[0] : value.split('T')[0]
            const valueMarkup = i > 0 ? `${value.amount}$` : 'Start Date'

            return <div class="repayment-plan__infographic-group">
              {i > 0 && bridgeMarkup}
              <div class="repayment-plan__node">
                <div class="repayment-plan__center-placeholder">
                  <span class="repayment-plan__date">{dateMarkup}</span>
                  <svg
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                    class="repayment-plan__circle-container">
                    <circle cx="20" cy="20" r="17" class="repayment-plan__circle" />
                  </svg>
                  <span class="repayment-plan__interest">{valueMarkup}</span>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <div class="repayment-plan__total">
        Total repayment:
      <span class="repayment-plan__total-value">{`${interestsObj.totalRepayment}$`}</span>
      </div>
    </aside>
  );
}
