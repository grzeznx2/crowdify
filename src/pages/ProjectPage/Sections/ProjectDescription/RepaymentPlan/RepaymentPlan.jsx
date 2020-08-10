import React from 'react';

import FormGroup from '../../../../../components/Form/Inputs/FormGroup/FormGroup';

import './RepaymentPlan.scss';

export default function RepaymentPlan({
  interestPaymentsStart,
  interestPaymentsRate,
  interestRate,
  interestDates,
  interestsNumber,
  endDate,
}) {
  return (
    <aside class="repayment-plan">
      <span class="repayment-plan__title">Sample Repayment Plan</span>
      <div className="repayment-plan__input">
        <FormGroup
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
        <div class="repayment-plan__infographic-group">
          <div class="repayment-plan__node">
            <span class="repayment-plan__date">31.07.2020</span>
            <div class="repayment-plan__circle-placeholder"></div>
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
            <div class="repayment-plan__circle-placeholder"></div>
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
            <div class="repayment-plan__circle-placeholder"></div>
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
            <div class="repayment-plan__circle-placeholder"></div>
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
      </div>
      <div class="repayment-plan__total">
        Total repayment:{' '}
        <span class="repayment-plan__total-value">1060.50$</span>
      </div>
    </aside>
  );
}
