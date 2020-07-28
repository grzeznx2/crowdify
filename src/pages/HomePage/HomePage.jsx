import React from 'react'

import SectionHero from './Sections/SectionHero'
import SectionLatestProjects from './Sections/SectionLatestProjects'
import './HomePage.scss'

export default function HomePage() {
    return (
        <>
            <SectionHero />
            <SectionLatestProjects />
        </>
    )
}