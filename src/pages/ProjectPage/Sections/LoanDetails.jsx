import React from 'react'

export default function LoanDetails() {
    return (
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
    )
}