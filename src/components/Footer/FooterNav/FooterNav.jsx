import React from 'react'
import { Link } from 'react-router-dom'

import './FooterNav.scss'

export default function FooterNav() {
    return (
        <nav className="footer-nav">
            <ul className="footer-nav__list">
                <li className="footer-nav__item">
                    <Link to='/terms' className='footer-nav__link'>terms</Link>
                </li>
                <li className="footer-nav__item">
                    <Link to='/terms' className='footer-nav__link'>privacy policy</Link>
                </li>
                <li className="footer-nav__item">
                    <Link to='/terms' className='footer-nav__link'>security</Link>
                </li>
                <li className="footer-nav__item">
                    <Link to='/terms' className='footer-nav__link'>risks</Link>
                </li>
                <li className="footer-nav__item">
                    <Link to='/terms' className='footer-nav__link'>price list</Link>
                </li>
            </ul>
        </nav>
    )
}