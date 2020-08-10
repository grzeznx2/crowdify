import React from 'react';

import RepaymentPlan from './RepaymentPlan/RepaymentPlan';

export default function ProjectDescription(props) {
  return (
    <section class="section-project-description">
      <h2 class="section-title section-title--text-primary">
        About The Project
      </h2>
      <div class="container">
        <div class="section-project-description__container">
          <div class="section-project-description__articles-container">
            <section class="section-project-description__articles">
              <article class="project-article">
                <h4 class="heading-4 text-blue-30 project-article__title">
                  Previous Project Updates
                </h4>
                <p class="project-article__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                  perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde,
                  omnis eum sit illo nostrum officia quae earum corporis fuga
                  excepturi aliquid dolorem!
                </p>
                <p class="project-article__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                  perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde,
                  omnis eum sit illo nostrum officia quae earum corporis fuga
                  excepturi aliquid dolorem!
                </p>
              </article>
              <article class="project-article">
                <h4 class="heading-4 text-blue-30 project-article__title">
                  Confirmed Sales
                </h4>
                <p class="project-article__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                  perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde,
                  omnis eum sit illo nostrum officia quae earum corporis fuga
                  excepturi aliquid dolorem!
                </p>
                <p class="project-article__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                  perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde,
                  omnis eum sit illo nostrum officia quae earum corporis fuga
                  excepturi aliquid dolorem!
                </p>
              </article>
              <article class="project-article">
                <h4 class="heading-4 text-blue-30 project-article__title">
                  Further Steps
                </h4>
                <p class="project-article__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                  perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde,
                  omnis eum sit illo nostrum officia quae earum corporis fuga
                  excepturi aliquid dolorem!
                </p>
                <p class="project-article__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                  perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde,
                  omnis eum sit illo nostrum officia quae earum corporis fuga
                  excepturi aliquid dolorem!
                </p>
              </article>
            </section>
          </div>
          <div class="section-project-description__repayment-schedule-container">
            <RepaymentPlan {...props} />
          </div>
        </div>
      </div>
    </section>
  );
}
