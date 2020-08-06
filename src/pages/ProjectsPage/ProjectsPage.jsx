import React, { useState, useCallback } from 'react'

import Filtration from '../../components/Filtration/Filtration'
import Project from '../../components/Project/Project'

import './ProjectsPage.scss'

export default function ProjectsPage() {
    const [fetchStatus, setFetchStatus] = useState({})

    const filtrationHandler = useCallback(fetchStatus => {
        console.log(fetchStatus.data)
        setFetchStatus(fetchStatus)
    }, [fetchStatus])

    return (
        <section className="section-projects">
            <h2 className="section-title section-title--text-primary">Latest Projects</h2>
            <Filtration onSearch={filtrationHandler} />
            <div className="container">
                <div className="section-projects__projects-container">
                    {
                        fetchStatus.isLoading ?
                            <h2>Loading...</h2>
                            :
                            fetchStatus.data ?
                                fetchStatus.data.projects.map(project => {
                                    return (
                                        <div key={project.id} className="section-projects__project"><Project {...project} /></div>
                                    )
                                })
                                :
                                null
                    }
                </div>
            </div>
            <div className="pagination">
                <a href="#" className="pagination__button pagination__button--arrow">
                    <svg className="pagination__icon">
                        <use xlinkHref='/img/sprite.svg#icon-chevron-left' />
                    </svg>
                </a>
                <a href="#" className="pagination__button">1</a>
                <a href="#" className="pagination__button">2</a>
                <a href="#" className="pagination__button">3</a>
                <a href="#" className="pagination__button">4</a>
                <a href="#" className="pagination__button">5</a>
                <a href="#" className="pagination__button">6</a>
                <a href="#" className="pagination__button">7</a>
                <a href="#" className="pagination__button">8</a>
                <a href="#" className="pagination__button pagination__button--active">9</a>
                <a href="#" className="pagination__button">10</a>
                <a href="#" className="pagination__button">
                    <svg className="pagination__icon">
                        <use xlinkHref='/img/sprite.svg#icon-chevron-right' />
                    </svg>
                </a>
            </div>
        </section>
    )
}