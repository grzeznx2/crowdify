import React, { useEffect, useState } from 'react';

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

  const calcInterestsDistribution = (interestPaymentsStart, interestPaymentsRate, duration) => {
    const interestsDistribution = {};
    interestsDistribution.first = interestPaymentsStart / duration;
    interestsDistribution.remaining = interestPaymentsRate / duration;

    return interestsDistribution;
  }

  const calcInterestAmount = (value, interestRate, duration) => {
    return (value * (interestRate / 100) * (duration / 12)).toFixed(2) * 1;
  };

  const createInterests = (interestsDistribution, interestsDates, interestAmount) => {
    return interestsDates.map((date, i) => ({
      date,
      amount: i === 0 ?
        (interestAmount * interestsDistribution.first).toFixed(2) * 1
        : (interestAmount * interestsDistribution.remaining).toFixed(2) * 1,
    }));
  };

  const createPlan = () => {
    const interestAmount = calcInterestAmount(value, interestRate, duration);
    console.log(interestAmount);

    const interestsDistribution = calcInterestsDistribution(interestPaymentsStart, interestPaymentsRate, duration)

    const interests = createInterests(interestsDistribution, interestsDates, interestAmount)

    return interests
  };

  const changeValue = (e) => {
    const { value } = e.target;
    setValue(value);
  };

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
          [endDate, ...createPlan()].map((interest, i) => {
            if (i === 0)
              return <div class="repayment-plan__infographic-group">
                <div class="repayment-plan__node">

                  <div class="repayment-plan__center-placeholder">
                    <span class="repayment-plan__date">{interest.split('T')[0]}</span>
                    <svg
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                      class="repayment-plan__circle-container"
                    >
                      <circle cx="20" cy="20" r="17" class="repayment-plan__circle" />
                    </svg>
                    <span class="repayment-plan__interest">Start Date</span>
                  </div>
                </div>
              </div>
            return <div class="repayment-plan__infographic-group">
              <div class="repayment-plan__bridge-container">
                <svg
                  viewBox="0 0 10 102"
                  class="repayment-plan__bridge"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="5"
                    y1="102"
                    x2="5"
                    y2="0"
                    class="repayment-plan__line"
                  />
                </svg>
              </div>
              <div class="repayment-plan__node">
                <div class="repayment-plan__center-placeholder">
                  <span class="repayment-plan__date">{interest.date.split('T')[0]}</span>
                  <svg
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                    class="repayment-plan__circle-container"
                  >
                    <circle cx="20" cy="20" r="17" class="repayment-plan__circle" />
                  </svg>
                  <span class="repayment-plan__interest">{interest.amount}$</span>
                </div>
              </div>
            </div>
          })
        }
        {/* <div class="repayment-plan__infographic-group">
          <div class="repayment-plan__node">
            <span class="repayment-plan__date">31.07.2020</span>
            <div class="repayment-plan__center-placeholder"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              class="repayment-plan__circle-container"
            >
              <circle cx="20" cy="20" r="17" class="repayment-plan__circle" />
            </svg>
            <span class="repayment-plan__interest">24.5$</span>
          </div>
        </div>
        <div class="repayment-plan__infographic-group">
          <div class="repayment-plan__bridge-container">
            <svg
              viewBox="0 0 10 102"
              class="repayment-plan__bridge"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="5"
                y1="102"
                x2="5"
                y2="0"
                class="repayment-plan__line"
              />
            </svg>
          </div>
          <div class="repayment-plan__node">
            <span class="repayment-plan__date">31.08.2020</span>
            <div class="repayment-plan__center-placeholder"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              class="repayment-plan__circle-container"
            >
              <circle cx="20" cy="20" r="17" class="repayment-plan__circle" />
            </svg>
            <span class="repayment-plan__interest">24.5$</span>
          </div>
        </div>
        <div class="repayment-plan__infographic-group">
          <div class="repayment-plan__bridge-container">
            <svg
              viewBox="0 0 10 102"
              class="repayment-plan__bridge"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="5"
                y1="102"
                x2="5"
                y2="0"
                class="repayment-plan__line"
              />
            </svg>
          </div>
          <div class="repayment-plan__node">
            <span class="repayment-plan__date">31.08.2020</span>
            <div class="repayment-plan__center-placeholder"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              class="repayment-plan__circle-container"
            >
              <circle cx="20" cy="20" r="17" class="repayment-plan__circle" />
            </svg>
            <span class="repayment-plan__interest">24.5$</span>
          </div>
        </div>
        <div class="repayment-plan__infographic-group">
          <div class="repayment-plan__bridge-container">
            <svg
              viewBox="0 0 10 102"
              class="repayment-plan__bridge"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="5"
                y1="102"
                x2="5"
                y2="0"
                class="repayment-plan__line"
              />
            </svg>
          </div>
          <div class="repayment-plan__node">
            <span class="repayment-plan__date">31.08.2020</span>
            <div class="repayment-plan__center-placeholder"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              class="repayment-plan__circle-container"
            >
              <circle cx="20" cy="20" r="17" class="repayment-plan__circle" />
            </svg>
            <span class="repayment-plan__interest">24.5$</span>
          </div>
        </div> */}
      </div>
      <div class="repayment-plan__total">
        Total repayment:{' '}
        <span class="repayment-plan__total-value">1060.50$</span>
      </div>
    </aside>
  );
}
