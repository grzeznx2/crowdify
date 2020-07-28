import React from 'react'

import './ProjectDetails.scss'

export default function ProjectDetails({ interestRate, type, period, location }) {
    return (
        <div class="project-details">
            <ul class="project-details__list">
                <li class="project-details__item">
                    <span class="project-details__label">interest rate:</span>
                    <span class="project-details__value">{interestRate}%</span>
                </li>
                <li class="project-details__item">
                    <span class="project-details__label">type:</span>
                    <span class="project-details__value">{type}</span>
                </li>
                <li class="project-details__item">
                    <span class="project-details__label">period:</span>
                    <span class="project-details__value">{period} months</span>
                </li>
                <li class="project-details__item">
                    <span class="project-details__label">location:</span>
                    <span class="project-details__value">{location}</span>
                </li>
            </ul>
        </div>

    )
}