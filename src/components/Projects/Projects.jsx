import React from 'react'

import Project from './Project/Project'

export default function Projects({ projects, wrapperClass, projectModifiers }) {
    return (
        <>
            {projects.map(project => {
                return (
                    wrapperClass ?
                        <div
                            key={project.id}
                            className={wrapperClass}>
                            <Project
                                modifiers={projectModifiers}
                                {...project} />
                        </div>
                        :
                        <Project
                            key={project.id}
                            modifiers={projectModifiers}
                            {...project} />
                )
            })}
        </>
    )
}