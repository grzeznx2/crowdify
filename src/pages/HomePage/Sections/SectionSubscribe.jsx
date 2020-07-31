import React from 'react'

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
                    <form action="#" class="form">
                        <div class="form__container form__container--subscribe">
                            <div class="input-group input-group--column">
                                <label for="subscribe-name" class="input-group__label">Name:</label>
                                <input id="subscribe-name" type="text" class="input-group__input input-group__input--invalid" />
                                <div class="error">
                                    <svg class="error__icon">
                                        <use xlinkHref='/img/sprite.svg#icon-circle-with-cross' />
                                    </svg>
                                    <span class="error__message">Name is required.</span>
                                </div>
                                <div class="error">
                                    <svg class="error__icon">
                                        <use xlinkHref='/img/sprite.svg#icon-circle-with-cross' />
                                    </svg>
                                    <span class="error__message">Name is required.</span>
                                </div>
                            </div>
                            <div class="input-group input-group--column">
                                <label for="subscribe-email" class="input-group__label">Email:</label>
                                <input id="subscribe-email" type="text" class="input-group__input input-group__input--valid" />
                            </div>
                        </div>
                        <div class="form__button-wrapper">

                            <a href="#" class="button button--primary">Subscribe</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}