import React from 'react'

import ProjectDetails from './ProjectDetails/ProjectDetails'
import CircleBar from './CircleBar/CircleBar'

import './Project.scss'

export default function Project({ title, interestRate, type, period, location, paid, minTarget, totalTarget }) {

    return (
        <div class="project">
            <div class="project__top-container">
                <div class="project__image-box">
                </div>
                <div class="project__title-box">
                    <h3 class="heading-3 text-white">
                        {title}
                    </h3>
                </div>
            </div>
            <div class="project__middle-container">

                <div class="project__details-box">
                    <ProjectDetails
                        interestRate={interestRate}
                        type={type}
                        period={period}
                        location={location} />
                </div>
                <div class="project__target-box">
                    <CircleBar paid={paid} minTarget={minTarget} totalTarget={totalTarget} />
                    {/* <div class="circle-bar">
                        <svg class="circle-bar__rings">
                            <circle class="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                            <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                cy='90' r='85' />
                            <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                            <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                cy='90' r='72' />
                        </svg>
                        <div class="circle-bar__percent-box">
                            <span class="circle-bar__percent">14%</span>
                            <span class="circle-bar__label"> of 50.000€ min</span>
                            <span class="circle-bar__percent">32%</span>
                            <span class="circle-bar__label"> of 128.500€ total</span>
                        </div>
                    </div> */}
                </div>
            </div>
            <div class="project__bottom-container">

                <a href="#" class="button button--info">View Project</a>
            </div>
        </div>
    )
}