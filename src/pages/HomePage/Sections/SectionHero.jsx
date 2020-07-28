import React from 'react'

import Button from '../../../components/Button/Button'

export default function SectionHero() {
    return (
        <section class="section-hero">
            <div class="container">
                <div class="section-hero__title-box">
                    <h1 class="heading-1 section-hero__title text-primary-30">
                        <span className="heading-1__break">invest today.</span>be free tomorrow.
                    </h1>
                    <p class="text section-hero__text">
                        Begin your financial journey with the fastet growing crowdfunding platform. Get immediate
                        acces
                        to
                        returns up to 32% and connect with investors around the whole world.
                    </p>
                    <Button to='/invest' modifiers={['primary']}>start investing</Button>
                </div>
            </div>
        </section>
    )
}