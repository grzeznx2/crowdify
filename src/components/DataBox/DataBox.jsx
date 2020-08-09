import React from 'react'

import './DataBox.scss'

export default function DataBox() {
    return (
        <div class="data-box data-box--bg-blue section-loan-details__data-box">
            <div class="data-box__title-box">
                <h5 class="heading-5 data-box__title">BuyBack Guarantee</h5>
            </div>
            <div class="data-box__content-box">
                <span class="data-box__value">Yes</span>
            </div>
        </div>
    )
}