import React from 'react'


import Logo from '../Logo/Logo'
import FooterNav from './FooterNav/FooterNav'
import SvgIcon from '../SvgIcon/SvgIcon'

import './Footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__info-container">
                        <Logo modifiers='footer white' />
                        <span className="footer__info">ul.Krakowska 25, Warszawa</span>
                        <span className="footer__info">All rights reserved &copy; 2020 crowdify.com</span>
                    </div>
                    <div className="footer__nav">
                        <FooterNav />
                    </div>
                    <div className="footer__trustpilot">
                        <span className="footer__info">
                            See our 55 stars on Trustpilot.
               </span>
                    </div>
                    <div className="footer__media">
                        <SvgIcon root='footer__icon' svgId='icon-facebook-with-circle' />
                        <SvgIcon root='footer__icon' svgId='icon-twitter-with-circle' />
                        <SvgIcon root='footer__icon' svgId='icon-instagram-with-circle' />
                    </div>
                </div>
            </div>
        </footer>
    )
}