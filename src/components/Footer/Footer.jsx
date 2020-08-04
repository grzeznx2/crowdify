import React from 'react'


import Logo from '../Logo/Logo'
import FooterNav from './FooterNav/FooterNav'
import SvgIcon from '../SvgIcon/SvgIcon'

import './Footer.scss'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__container">
                    <div class="footer__info-container">
                        <Logo modifiers='footer white' />
                        <span class="footer__info">ul.Krakowska 25, Warszawa</span>
                        <span class="footer__info">All rights reserved &copy; 2020 crowdify.com</span>
                    </div>
                    <div className="footer__nav">
                        <FooterNav />
                    </div>
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