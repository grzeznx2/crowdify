import React from 'react'

import SvgIcon from '../SvgIcon/SvgIcon'

import './Feature.scss'

export default function Feature({ root, svgId, title, text }) {
    return (
        <div class="feature">
            <SvgIcon root={root} svgId={svgId} />
            <div class="feature__title-box">
                <h5 class="heading-5 text-white">{title}</h5>
            </div>
            <p class="feature__text">{text}
            </p>
        </div>
    )
}