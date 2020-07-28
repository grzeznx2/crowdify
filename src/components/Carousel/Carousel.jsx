import React from 'react'

import SvgIcon from '../SvgIcon/SvgIcon'
import Project from '../Project/Project'

import './Carousel.scss'

export default function Carousel() {
    return (
        <div class="carousel">
            <button>
                <SvgIcon svgId='icon-chevron-left' root='carousel__arrow' modifiers={['left']} />
            </button>
            <button>
                <SvgIcon svgId='icon-chevron-right' root='carousel__arrow' modifiers={['right']} />
            </button>
            <div class="carousel__container">
                <div class="carousel__content">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}