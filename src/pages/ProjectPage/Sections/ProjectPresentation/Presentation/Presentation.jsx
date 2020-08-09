import React from 'react'

import CircleBar from '../../../../../components/Projects/CircleBar/CircleBar'
import ProjectDetails from '../../../../../components/Projects/ProjectDetails/ProjectDetails'

import './Presentation.scss'

export default function Presentation({ location, name, paid, minTarget, totalTarget }) {
    return (
        <div class="presentation">
            <div class="presentation__container presentation__container--title-container">
                <div class="presentation__title-box">
                    <h3 class="heading-3">{location}</h3>
                    <h2 class="heading-2 text-bold presentation__title">{name}</h2>
                    <a href="#" class="button button--primary">Invest</a>
                </div>
            </div>
            <div class="presentation__container presentation__container--image-container">
                <div class="presentation__target-details-container">
                    <div class="presentation__target-box">
                        {/* <div class="target"> */}
                        {/* <div class="circle-bar circle-bar--bg-dark">
                                <svg class="circle-bar__rings">
                                    <circle class="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                    <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90' cy='90'
                                        r='85' />
                                    <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                    <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90' cy='90'
                                        r='72' />
                                </svg>
                                <div class="circle-bar__percent-box">
                                    <span class="circle-bar__percent">14%</span>
                                    <span class="circle-bar__label"> of 50.000€ min</span>
                                    <span class="circle-bar__percent">32%</span>
                                    <span class="circle-bar__label"> of 128.500€ total</span>
                                </div>
                            </div> */}
                        <CircleBar
                            paid={paid}
                            minTarget={minTarget}
                            totalTarget={totalTarget}
                            modifiers='bg-dark'
                        />
                        {/* </div> */}
                    </div>
                    <div class="presentation__details-box">
                        <div class="project-details project-details--bg-dark">
                            <ul class="project-details__list">
                                <li class="project-details__item">
                                    <span class="project-details__label">interest rate:</span>
                                    <span class="project-details__value">25%</span>
                                </li>
                                <li class="project-details__item">
                                    <span class="project-details__label">type:</span>
                                    <span class="project-details__value">Entertainment</span>
                                </li>
                                <li class="project-details__item">
                                    <span class="project-details__label">period:</span>
                                    <span class="project-details__value">6 months</span>
                                </li>
                                <li class="project-details__item">
                                    <span class="project-details__label">location:</span>
                                    <span class="project-details__value">Riga</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}