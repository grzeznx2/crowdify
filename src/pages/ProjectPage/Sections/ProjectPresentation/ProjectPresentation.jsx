import React from 'react'

import Presentation from './Presentation/Presentation'

export default function ProjectPresentation(props) {
    return (
        <section class="section-project-presentation">
            <div class="container">
                <Presentation  {...props} />
            </div>
        </section>
    )
}