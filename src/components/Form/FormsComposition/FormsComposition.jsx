import React from 'react'


import RegisterForm from '../Forms/RegisterForm'

import './FormsComposition.scss'

export default function FormsComposition() {
    return (
        <div class="forms-composition">
            <div class="forms-composition__form-box forms-composition__form-box--sign-up">
                <RegisterForm />
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