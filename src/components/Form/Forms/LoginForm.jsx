import React from 'react'

import './Form.scss'

export default function LoginForm() {
    return (
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
    )
}