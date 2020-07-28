import React from 'react'

import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import MainNav from '../MainNav/MainNav'
import SvgIcon from '../SvgIcon/SvgIcon'

import './Header.scss'

export default function Header() {
    return <header class="header">

        <div class="container">
            <div class="header__container">
                <Logo modifiers={['white', 'main']} otherClasses={['header__logo']} />
                <MainNav />
                <Button to='/' root='button-account' otherClasses={['header__button-account']}>
                    <SvgIcon svgId='icon-user' otherClasses={["button-account__icon"]} />
                </Button>
                <Button to="/" modifiers={['secondary']} otherClasses={['hide-p']}>
                    login / signin
                </Button>

            </div>
        </div>
    </header>
}