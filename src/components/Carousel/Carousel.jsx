import React, { useState } from 'react'

import Button from '../Button/Button'
import Project from '../Project/Project'
import SvgIcon from '../SvgIcon/SvgIcon'

import './Carousel.scss'

export default function Carousel() {
    const [contentPosition, setContentPosition] = useState(0)

    const handleCarousel = (direction) => {
        if (direction === 'forward') setContentPosition(prev => prev - 100)
        if (direction === 'backward') setContentPosition(prev => prev + 100)
    }

    const handleForward = () => handleCarousel('forward')
    const handleBackward = () => handleCarousel('backward')

    return (
        <div class="carousel">
            <Button handleClick={handleBackward} root='carousel__arrow-button' modifiers={['left']}>
                <SvgIcon svgId='icon-chevron-left' root='carousel__arrow-icon' />
            </Button>
            <Button handleClick={handleForward} root='carousel__arrow-button' modifiers={['right']}>
                <SvgIcon svgId='icon-chevron-right' root='carousel__arrow-icon' />
            </Button>
            <div class="carousel__container">
                <div
                    style={{
                        transform: `translateX(${contentPosition}%)`
                    }}
                    class="carousel__content">
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                        paid={40000}
                        minTarget={50000}
                        totalTarget={100000}
                    />
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                        paid={80000}
                        minTarget={50000}
                        totalTarget={100000}
                    />
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                        paid={40000}
                        minTarget={50000}
                        totalTarget={100000}
                    />
                    <Project
                        title='modern, high quality detached house project'
                        interestRate={32}
                        period={6}
                        type='entertainment'
                        location='riga'
                        paid={40000}
                        minTarget={50000}
                        totalTarget={100000}
                    />
                </div>
            </div>
        </div>
    )
}