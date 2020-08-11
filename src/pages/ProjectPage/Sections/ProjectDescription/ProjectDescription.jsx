import React from 'react';

import RepaymentPlan from './RepaymentPlan/RepaymentPlan';
import Summary from './Summary/Summary';

export default function ProjectDescription({ summary, ...otherProps }) {
  return (
    <section class="section-project-description">
      <h2 class="section-title section-title--text-primary">
        About The Project
      </h2>
      <div class="container">
        <div class="section-project-description__container">
          <div class="section-project-description__articles-container">
            <Summary summary={summary} />
          </div>
          <div class="section-project-description__repayment-schedule-container">
            <RepaymentPlan {...otherProps} />
          </div>
        </div>
      </div>
    </section>
  );
}
