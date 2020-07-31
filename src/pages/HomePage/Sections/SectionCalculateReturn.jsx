import React from 'react'

import ReturnCalculator from '../../../components/ReturnCalculator/ReturnCalculator'

export default function SectionCalculateReturn() {
    return (
        <section className="section-calculate-return">
            <div className="container">
                <div className="section-calculate-return__container">
                    <div className="section-calculate-return__image-container">
                        <div style={{
                            backgroundImage: `url('/assets/img/Girl-with-umbrella.jpg')`
                        }} className="section-calculate-return__image-box">
                        </div>
                    </div>
                    <div className="section-calculate-return__return-calculator-container">
                        <ReturnCalculator />
                    </div>
                </div>
            </div>
        </section>
    )
}