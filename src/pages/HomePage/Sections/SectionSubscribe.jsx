import React from 'react'

import SubscribeForm from '../../../components/Form/Forms/SubscribeForm'

export default function SectionSubscribe() {
    return (
        <section class="section-subscribe">
            <div class="container">
                <h2 class="section-title section-title--text-primary">Subscribe to the newsletter</h2>
                <div class="section-subscribe__container">
                    <p class="section-subscribe__text text">Subscribe to our newsletter and stay updated on the
                    latest
                    investments
               and special offers!</p>
                    <SubscribeForm />
                </div>
            </div>
        </section>
    )
}