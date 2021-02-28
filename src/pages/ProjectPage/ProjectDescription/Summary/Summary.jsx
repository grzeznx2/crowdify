import React from 'react'

import ProjectArticle from './ProjectArticle/ProjectArticle'

export default function Summary({ summary }) {
    return (
        <section className="section-project-description__articles">
            {
                summary.map(article => <ProjectArticle {...article} />)
            }
        </section >
    )
}