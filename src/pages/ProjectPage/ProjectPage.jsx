import React from 'react'

import LoanDetails from './Sections/LoanDetails'
import ProjectDescription from './Sections/ProjectDescription'
import ProjectPresentation from './Sections/ProjectPresentation'

import './ProjectPage.scss'

export default function ProjectPage() {
    return (<>
        <ProjectPresentation />
        <LoanDetails />
        <ProjectDescription />
    </>
    )
}