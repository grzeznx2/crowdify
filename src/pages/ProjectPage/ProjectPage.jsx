import React from 'react'

import './ProjectPage.scss'

export default function ProjectPage() {
    return (<>
        <section class="section-project-presentation">
            <div class="container">
                <div class="project-presentation">
                    <div class="project-presentation__container project-presentation__container--title-container">
                        <div class="project-presentation__title-box">
                            <h3 class="heading-3">Estonia</h3>
                            <h2 class="heading-2 text-bold project-presentation__title">Biggest Renovable Energy Farm
                       </h2>
                            <a href="#" class="button button--primary">Invest</a>
                        </div>
                    </div>
                    <div class="project-presentation__container project-presentation__container--image-container">
                        <div class="project-presentation__target-details-container">
                            <div class="project-presentation__target-box">
                                <div class="target">
                                    <div class="circle-bar circle-bar--bg-dark">
                                        <svg class="circle-bar__rings">
                                            <circle class="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                            <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90' cy='90'
                                                r='85' />
                                            <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                            <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90' cy='90'
                                                r='72' />
                                        </svg>
                                        <div class="circle-bar__percent-box">
                                            <span class="circle-bar__percent">14%</span>
                                            <span class="circle-bar__label"> of 50.000€ min</span>
                                            <span class="circle-bar__percent">32%</span>
                                            <span class="circle-bar__label"> of 128.500€ total</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="project-presentation__details-box">
                                <div class="project-details project-details--bg-dark">
                                    <ul class="project-details__list">
                                        <li class="project-details__item">
                                            <span class="project-details__label">interest rate:</span>
                                            <span class="project-details__value">25%</span>
                                        </li>
                                        <li class="project-details__item">
                                            <span class="project-details__label">type:</span>
                                            <span class="project-details__value">Entertainment</span>
                                        </li>
                                        <li class="project-details__item">
                                            <span class="project-details__label">period:</span>
                                            <span class="project-details__value">6 months</span>
                                        </li>
                                        <li class="project-details__item">
                                            <span class="project-details__label">location:</span>
                                            <span class="project-details__value">Riga</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-loan-details">
            <h2 class="section-title section-title--text-white">
                Loan Details
           </h2>
            <div class="container">
                <div class="section-loan-details__details-container">
                    <div class="section-loan-details__detail">
                        <div class="data-box data-box--bg-blue">
                            <div class="data-box__title-box">
                                <h5 class="heading-5 data-box__title">Minimal Target</h5>
                            </div>
                            <div class="data-box__content-box">
                                <span class="data-box__value">25, 000 $</span>
                            </div>
                        </div>
                    </div>
                    <div class="section-loan-details__detail">
                        <div class="data-box data-box--bg-blue section-loan-details__data-box">
                            <div class="data-box__title-box">
                                <h5 class="heading-5 data-box__title">Total Target</h5>
                            </div>
                            <div class="data-box__content-box">
                                <span class="data-box__value">250, 000 $</span>
                            </div>
                        </div>
                    </div>
                    <div class="section-loan-details__detail">
                        <div class="data-box data-box--bg-blue section-loan-details__data-box">
                            <div class="data-box__title-box">
                                <h5 class="heading-5 data-box__title">Interest Rate</h5>
                            </div>
                            <div class="data-box__content-box">
                                <span class="data-box__value">26%</span>
                            </div>
                        </div>
                    </div>
                    <div class="section-loan-details__detail">
                        <div class="data-box data-box--bg-blue section-loan-details__data-box">
                            <div class="data-box__title-box">
                                <h5 class="heading-5 data-box__title">Loan Period</h5>
                            </div>
                            <div class="data-box__content-box">
                                <span class="data-box__value">6 months</span>
                            </div>
                        </div>
                    </div>
                    <div class="section-loan-details__detail">
                        <div class="data-box data-box--bg-blue section-loan-details__data-box">
                            <div class="data-box__title-box">
                                <h5 class="heading-5 data-box__title">Iterest Payment</h5>
                            </div>
                            <div class="data-box__content-box">
                                <span class="data-box__value">Every 3 months</span>
                            </div>
                        </div>
                    </div>
                    <div class="section-loan-details__detail">
                        <div class="data-box data-box--bg-blue section-loan-details__data-box">
                            <div class="data-box__title-box">
                                <h5 class="heading-5 data-box__title">BuyBack Guarantee</h5>
                            </div>
                            <div class="data-box__content-box">
                                <span class="data-box__value">Yes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-project-description">
            <h2 class="section-title section-title--text-primary">
                About The Project
           </h2>
            <div class="container">
                <div class="section-project-description__container">
                    <div class="section-project-description__articles-container">
                        <section class="section-project-description__articles">
                            <article class="project-article">
                                <h4 class="heading-4 text-blue-30 project-article__title">Previous Project Updates</h4>
                                <p class="project-article__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                In,
                                perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde, omnis eum sit illo
                                nostrum
                             officia quae earum corporis fuga excepturi aliquid dolorem!</p>
                                <p class="project-article__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                In,
                                perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde, omnis eum sit illo
                                nostrum
                             officia quae earum corporis fuga excepturi aliquid dolorem!</p>
                            </article>
                            <article class="project-article">
                                <h4 class="heading-4 text-blue-30 project-article__title">Confirmed Sales</h4>
                                <p class="project-article__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                In,
                                perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde, omnis eum sit illo
                                nostrum
                             officia quae earum corporis fuga excepturi aliquid dolorem!</p>
                                <p class="project-article__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                In,
                                perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde, omnis eum sit illo
                                nostrum
                             officia quae earum corporis fuga excepturi aliquid dolorem!</p>
                            </article>
                            <article class="project-article">
                                <h4 class="heading-4 text-blue-30 project-article__title">Further Steps</h4>
                                <p class="project-article__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                In,
                                perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde, omnis eum sit illo
                                nostrum
                             officia quae earum corporis fuga excepturi aliquid dolorem!</p>
                                <p class="project-article__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                In,
                                perspiciatis? Ipsam cum, labore, blanditiis animi itaque unde, omnis eum sit illo
                                nostrum
                             officia quae earum corporis fuga excepturi aliquid dolorem!</p>
                            </article>
                        </section>
                    </div>
                    <div class="section-project-description__repayment-schedule-container">
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
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}