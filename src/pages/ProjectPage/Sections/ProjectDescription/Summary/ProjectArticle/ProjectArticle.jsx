import React from 'react'

import './ProjectArticle.scss'

export default function ProjectArticle({ title, content }) {
    return (
        <article className="project-article">
            <h4 className="heading-4 text-blue-30 project-article__title">
                {title}
            </h4>
            {
                content.map(paragraph => <p className="project-article__text">{paragraph}</p>)
            }
        </article>
    )
}