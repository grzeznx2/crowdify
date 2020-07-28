import React from 'react'
import { Link } from 'react-router-dom'

import './MainNav.scss'

export default function MainNav() {

    return <nav class="header__nav">
        <ul class="main-nav">
            <li class="main-nav__item">
                <Link to="/" class="main-nav__link">invest</Link>
            </li>
            <li class="main-nav__item">
                <Link to="/" class="main-nav__link">about</Link>
            </li>
            <li class="main-nav__item">
                <Link to="/" class="main-nav__link">blog</Link>
            </li>
        </ul>
    </nav>
}