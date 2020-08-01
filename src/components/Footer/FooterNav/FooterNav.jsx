import React from 'react'
import { Link } from 'react-router-dom'

import './FooterNav.scss'

export default function FooterNav() {
    return (
        <nav class="footer-nav">
            <ul class="footer-nav__list">
                <li class="footer-nav__item">
                    <Link to='/terms' class='footer-nav__link'>terms</Link>
                </li>
                <li class="footer-nav__item">
                    <Link to='/terms' class='footer-nav__link'>privacy policy</Link>
                </li>
                <li class="footer-nav__item">
                    <Link to='/terms' class='footer-nav__link'>security</Link>
                </li>
                <li class="footer-nav__item">
                    <Link to='/terms' class='footer-nav__link'>risks</Link>
                </li>
                <li class="footer-nav__item">
                    <Link to='/terms' class='footer-nav__link'>price list</Link>
                </li>
            </ul>
        </nav>
    )
}