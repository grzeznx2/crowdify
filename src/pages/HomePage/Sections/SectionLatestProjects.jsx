import React from 'react'

import Button from '../../../components/Button/Button'
import Carousel from '../../../components/Carousel/Carousel'

export default function SectionLatestProjects() {
    return (
        <section class="section-latest-projects">
            <h2 class="section-title section-title--text-primary">Latest Projects</h2>
            <div class="container">
                <Carousel />
                <div class="section-latest-projects__button-wrapper">
                    <Button to='/invest' modifiers='primary'>view all projects</Button>
                </div>
            </div>
        </section>
    )
}