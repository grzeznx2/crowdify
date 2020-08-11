import React from 'react'

import Button from '../../Button/Button'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import CircleBar from '../CircleBar/CircleBar'

import { joinClasses } from '../../../utils/utils'

import './Project.scss'

export default function Project({ name, interestRate, type, duration, location, paid, minTarget, totalTarget, modifiers, otherClasses, id, imageUrl }) {

    return (
        <div className={joinClasses('project', modifiers, otherClasses)}>
            <div className="project__top-container">
                <div style={{
                    backgroundImage: `url(${imageUrl})`,
                }} className="project__image-box">
                </div>
                <div className="project__title-box">
                    <h3 className="heading-3 text-white">
                        {name}
                    </h3>
                </div>
            </div>
            <div className="project__middle-container">

                <div className="project__details-box">
                    <ProjectDetails
                        interestRate={interestRate}
                        type={type}
                        duration={duration}
                        location={location} />
                </div>
                <div className="project__target-box">
                    <CircleBar paid={paid} minTarget={minTarget} totalTarget={totalTarget} />
                </div>
            </div>
            <div className="project__bottom-container">
                <Button to={`/projects/${id}`} modifiers='info'>view project</Button>
            </div>
        </div>
    )
}