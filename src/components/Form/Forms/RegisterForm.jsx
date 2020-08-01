import React from 'react'

import './Form.scss'

export default function RegisterForm() {
    return (
        <form action="#" class="form form--center-column">
            <h3 class="heading-3 text-blue-20 text-bold form__title">
                Create Account
                  </h3>
            <div class="form__container form__container--auth">
                <div class="input-group input-group--column">
                    <label htmlFor="register-first-name" class="input-group__label">First Name:</label>
                    <input id="register-first-name" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-last-name" class="input-group__label">Last Name:</label>
                    <input id="register-last-name" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-email" class="input-group__label">Email:</label>
                    <input id="register-email" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-password" class="input-group__label">Password:</label>
                    <input id="register-password" type="text" class="input-group__input" />
                </div>
                <div class="input-group input-group--column">
                    <label htmlFor="register-confirm-password" class="input-group__label">Confirm
                           Password:</label>
                    <input id="register-confirm-password" type="text" class="input-group__input" />
                </div>
            </div>
            <div class="input-group input-group--column">
                <div class="form__checkbox-container">
                    <div class="checkbox checkbox--on-light-bg">
                        <input type="checkbox" id="register-agree-terms" class="checkbox__input" />
                        <label htmlFor="register-agree-terms" class="checkbox__label">
                            <span class="checkbox__button">
                                <svg class="checkbox__icon">
                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                </svg>
                            </span>
                                 I agree to the terms
                              </label>
                    </div>
                </div>
            </div>
            <button class="button button--primary">Sign Up</button>
        </form>
    )
}