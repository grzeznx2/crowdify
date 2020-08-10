import React from 'react';

import DataBox from '../../../../components/DataBox/DataBox';

export default function LoanDetails({
  minTarget,
  totalTarget,
  interestRate,
  duration,
  interestPayments,
}) {
  return (
    <section class="section-loan-details">
      <h2 class="section-title section-title--text-white">Loan Details</h2>
      <div class="container">
        <div class="section-loan-details__details-container">
          <div class="section-loan-details__detail">
            <DataBox
              modifiers="bg-blue"
              title="minimal target"
              value={`${minTarget} $`}
            />
          </div>
          <div class="section-loan-details__detail">
            <DataBox
              modifiers="bg-blue"
              title="total target"
              value={`${totalTarget} $`}
            />
          </div>
          <div class="section-loan-details__detail">
            <DataBox
              modifiers="bg-blue"
              title="interest rate"
              value={`${interestRate}%`}
            />
          </div>
          <div class="section-loan-details__detail">
            <DataBox
              modifiers="bg-blue"
              title="loan period"
              value={`${duration} ${duration === 1 ? 'month' : 'months'}`}
            />
          </div>
          <div class="section-loan-details__detail">
            <DataBox
              modifiers="bg-blue"
              title="interest payment"
              value={interestPayments}
            />
          </div>
          <div class="section-loan-details__detail">
            <DataBox
              modifiers="bg-blue"
              title="buyBack guarantee"
              value="Yes"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
