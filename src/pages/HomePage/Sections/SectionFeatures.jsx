import React from 'react'

import Button from '../../../components/Button/Button'
import Feature from '../../../components/Feature/Feature'

export default function SectionFeatures() {
    const features = [
        {
            root: 'feature__icon',
            svgId: 'icon-pie-chart',
            title: 'diversification',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore velit.',
        },
        {
            root: 'feature__icon',
            svgId: 'icon-handshake',
            title: 'profitability',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore.',
        },
        {
            root: 'feature__icon',
            svgId: 'icon-bank',
            title: 'security',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
    ]
    return (
        <section class="section-features">
            <div class="container">
                <h2 class="section-title section-title--text-white">Why should you choose us?</h2>
                <div class="section-features__features-container">
                    {features.map((feature, i) => <div key={`${feature.title}-${i}`} class="section-features__feature-box"><Feature {...feature} /></div>)}
                </div>
                <div class="section-features__button-wrapper">
                    <Button to='/login-register' modifiers={['secondary']}>start now</Button>
                </div>
            </div>
        </section>
    )
}