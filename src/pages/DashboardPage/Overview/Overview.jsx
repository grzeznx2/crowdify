import React, { useEffect } from 'react'


export default function Overview({ changeTitle }) {

    useEffect(() => {
        changeTitle()
    }, [])

    return (
        <>
            <div class="section-dashboard__box section-dashboard__box--small">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Amount invested</h5>
                    </div>
                    <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                    </div>
                </div>
            </div>
            <div class="section-dashboard__box section-dashboard__box--small">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Amount Available</h5>
                    </div>
                    <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                    </div>
                </div>
            </div>
            <div class="section-dashboard__box section-dashboard__box--small">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Account Value</h5>
                    </div>
                    <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                    </div>
                </div>
            </div>
            <div class="section-dashboard__box section-dashboard__box--small">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Interests Earned</h5>
                    </div>
                    <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                    </div>
                </div>
            </div>
            <div class="section-dashboard__box section-dashboard__box--small">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Average Interest Rate</h5>
                    </div>
                    <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                    </div>
                </div>
            </div>
            <div class="section-dashboard__box section-dashboard__box--small">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Minimal Target</h5>
                    </div>
                    <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                    </div>
                </div>
            </div>
        </>
    )
}