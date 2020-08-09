import React from 'react'

import DataBox from '../../../../components/DataBox/DataBox'

export default function LoanDetails() {
    return (
        <section class="section-loan-details">
            <h2 class="section-title section-title--text-white">
                Loan Details
           </h2>
            <div class="container">
                <div class="section-loan-details__details-container">
                    <div class="section-loan-details__detail">
                        <DataBox modifiers='bg-blue' title='minimal target' value='25, 000 $' />
                    </div>
                    <div class="section-loan-details__detail">
                        <DataBox modifiers='bg-blue' title='total target' value='250, 000 $' />
                    </div>
                    <div class="section-loan-details__detail">
                        <DataBox modifiers='bg-blue' title='interest rate' value='26%' />
                    </div>
                    <div class="section-loan-details__detail">
                        <DataBox modifiers='bg-blue' title='loan period' value='6 months' />
                    </div>
                    <div class="section-loan-details__detail">
                        <DataBox modifiers='bg-blue' title='interest payment' value='Every 3 months' />
                    </div>
                    <div class="section-loan-details__detail">
                        <DataBox modifiers='bg-blue' title='buyBack guarantee' value='Yes' />
                    </div>
                </div>
            </div>
        </section>
    )
}