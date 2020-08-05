import React from 'react'
import { Link } from 'react-router-dom'

import './MainNav.scss'

export default function MainNav() {

    return <nav className="header__nav">
        <ul className="main-nav">
            <li className="main-nav__item">
                <Link to="/" className="main-nav__link">invest</Link>
            </li>
            <li className="main-nav__item">
                <Link to="/" className="main-nav__link">about</Link>
            </li>
            <li className="main-nav__item">
                <Link to="/" className="main-nav__link">blog</Link>
            </li>
        </ul>
    </nav>
}