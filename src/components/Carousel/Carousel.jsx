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
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                    />
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                    />
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                    />
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                    />
                </div>
            </div>
        </div>
    )
}