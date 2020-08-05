import React from 'react'

import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import MainNav from '../MainNav/MainNav'
import SvgIcon from '../SvgIcon/SvgIcon'

import './Header.scss'

export default function Header() {
    return <header className="header">

        <div className="container">
            <div className="header__container">
                <Logo modifiers='white main' otherClasses='header__logo' />
                <MainNav />
                <Button to='/' root='button-account' otherClasses='header__button-account'>
                    <SvgIcon svgId='icon-user' otherClasses='button-account__icon' />
                </Button>
                <Button to="/auth" modifiers='secondary' otherClasses='hide-p'>
                    login / sign in
                </Button>

            </div>
        </div>
    </header>
}