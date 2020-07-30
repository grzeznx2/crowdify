import React from 'react'

import ProjectDetails from './ProjectDetails/ProjectDetails'
import CircleBar from './CircleBar/CircleBar'

import './Project.scss'

export default function Project({ name, interestRate, type, duration, location, paid, minTarget, totalTarget }) {

    return (
        <div class="project">
            <div class="project__top-container">
                <div class="project__image-box">
                </div>
                <div class="project__title-box">
                    <h3 class="heading-3 text-white">
                        {name}
                    </h3>
                </div>
            </div>
            <div class="project__middle-container">

                <div class="project__details-box">
                    <ProjectDetails
                        interestRate={interestRate}
                        type={type}
                        duration={duration}
                        location={location} />
                </div>
                <div class="project__target-box">
                    <CircleBar paid={paid} minTarget={minTarget} totalTarget={totalTarget} />
                </div>
            </div>
            <div class="project__bottom-container">

                <a href="#" class="button button--info">View Project</a>
            </div>
        </div>
    )
}