import React from 'react'

import SvgIcon from '../SvgIcon/SvgIcon'

import './Footer.scss'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__container">
                    <div class="footer__info-container">
                        <a href="#" class="logo logo--footer logo--white">Crowdify</a>
                        <span class="footer__info">ul.Krakowska 25, Warszawa</span>
                        <span class="footer__info">All rights reserved &copy; 2020 crowdify.com</span>
                    </div>
                    <nav class="footer-nav footer__nav">
                        <ul class="footer-nav__list">
                            <li class="footer-nav__item">
                                <a href="#" class="footer-nav__link">Terms</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="#" class="footer-nav__link">Privacy Policy</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="#" class="footer-nav__link">Security</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="#" class="footer-nav__link">Risks</a>
                            </li>
                            <li class="footer-nav__item">
                                <a href="#" class="footer-nav__link">Price List</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="footer__trustpilot">
                        <span class="footer__info">
                            See our 55 stars on Trustpilot.
               </span>
                    </div>
                    <div class="footer__media">
                        <SvgIcon root='footer__icon' svgId='icon-facebook-with-circle' />
                        <SvgIcon root='footer__icon' svgId='icon-twitter-with-circle' />
                        <SvgIcon root='footer__icon' svgId='icon-instagram-with-circle' />
                    </div>
                </div>
            </div>
        </footer>
    )
}