import React from 'react'

import Button from '../../../components/Button/Button'

export default function SectionFeatures() {
    return (
        <section class="section-features">
            <div class="container">
                <h2 class="section-title section-title--text-white">Why should you choose us?</h2>
                <div class="section-features__features-container">
                    <div class="section-features__feature-box">
                        <div class="feature">
                            <svg class="feature__icon">
                                <use xlinkHref='/img/sprite.svg#icon-pie-chart' />
                            </svg>
                            <div class="feature__title-box">
                                <h5 class="heading-5 text-white">Diversification</h5>
                            </div>
                            <p class="feature__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
                            velit.
                  </p>
                        </div>
                    </div>
                    <div class="section-features__feature-box">
                        <div class="feature">
                            <svg class="feature__icon">
                                <use xlinkHref='/img/sprite.svg#icon-handshake' />
                            </svg>
                            <div class="feature__title-box">
                                <h5 class="heading-5 text-white">Profitability</h5>
                            </div>
                            <p class="feature__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Inventore.
                  </p>
                        </div>
                    </div>
                    <div class="section-features__feature-box">
                        <div class="feature">
                            <svg class="feature__icon">
                                <use xlinkHref='/img/sprite.svg#icon-bank' />
                            </svg>
                            <div class="feature__title-box">
                                <h5 class="heading-5 text-white">Security</h5>
                            </div>
                            <p class="feature__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="section-features__button-wrapper">
                    <Button to='/login-register' modifiers={['secondary']}>start now</Button>
                </div>
            </div>
        </section>
    )
}