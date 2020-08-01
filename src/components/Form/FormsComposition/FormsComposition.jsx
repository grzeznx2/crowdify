import React from 'react'

import './FormsComposition.scss'

export default function FormsComposition() {
    return (
        <div class="forms-composition">
            <div class="forms-composition__form-box forms-composition__form-box--sign-up">
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
            </div>
            <div class="forms-composition__form-box forms-composition__form-box--sign-in">
                <form action="#" class="form form--center-column">
                    <h3 class="heading-3 text-blue-20 text-bold form__title">
                        Sign In
                  </h3>
                    <div class="form__container form__container--auth">
                        <div class="input-group input-group--column">
                            <label htmlFor="sign-in-email" class="input-group__label">Email:</label>
                            <input id="sign-in-email" type="text" class="input-group__input" />
                        </div>
                        <div class="input-group input-group--column">
                            <label htmlFor="sign-in-password" class="input-group__label">Password:</label>
                            <input id="sign-in-password" type="text" class="input-group__input" />
                        </div>
                    </div>
                    <a href="#" class="form__forgot-password-link">Forgot your password?</a>
                    <button class="button button--primary">Sign In</button>
                </form>
            </div>
            <div class="forms-composition__overlay-container">
                <div class="forms-composition__overlay">
                    <div class="forms-composition__overlay-box forms-composition__overlay-box--left">
                        <h3 class="heading-3 text-bold">
                            Welcome Back!
                     </h3>
                        <p class="forms-composition__text">
                            Login now to get access to latest projects
                     </p>
                        <button href="#" class="button button--secondary" id="button-sign-in">Sign
                        In</button>
                    </div>
                    <div class="forms-composition__overlay-box forms-composition__overlay-box--right">
                        <h3 class="heading-3 text-bold">
                            Welcome!
                     </h3>
                        <p class="forms-composition__text">
                            Register now and begin your financial journey with us
                     </p>
                        <button href="#" class="button button--secondary" id="button-sign-up">Sign
                        Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}