import React from 'react'

import LoanDetails from './Sections/LoanDetails/LoanDetails'
import ProjectDescription from './Sections/ProjectDescription/ProjectDescription'
import ProjectPresentation from './Sections/ProjectPresentation/ProjectPresentation'

import './ProjectPage.scss'

export default function ProjectPage() {
    return (<>
        <ProjectPresentation />
        <LoanDetails />
        <ProjectDescription />
    </>
    )
}