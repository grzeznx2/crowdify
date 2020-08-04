import React, { useState, useCallback } from 'react'

import Button from '../../Button/Button'
import RegisterForm from '../Forms/RegisterForm'
import LoginForm from '../Forms/LoginForm'

import './FormsComposition.scss'

export default function FormsComposition() {
    const [registerMode, setRegisterMode] = useState(false)

    const handleSignInButton = useCallback(() => setRegisterMode(false), [])
    const handleSignUpButton = useCallback(() => setRegisterMode(true), [])

    return (
        <div class={`forms-composition ${registerMode ? 'forms-composition--register-mode' : ''}`}>
            <div class="forms-composition__form-box forms-composition__form-box--sign-up">
                <RegisterForm />
            </div>
            <div class="forms-composition__form-box forms-composition__form-box--sign-in">
                <LoginForm />
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
                        <Button handleClick={handleSignInButton} modifiers='secondary'>Sign In</Button>
                    </div>
                    <div class="forms-composition__overlay-box forms-composition__overlay-box--right">
                        <h3 class="heading-3 text-bold">
                            Welcome!
                     </h3>
                        <p class="forms-composition__text">
                            Register now and begin your financial journey with us
                     </p>
                        <Button handleClick={handleSignUpButton} modifiers='secondary'>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}