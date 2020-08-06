import React, { useEffect } from 'react'

import useFetch from '../../hooks/useFetch'

import Filtration from '../../components/Filtration/Filtration'
import Project from '../../components/Project/Project'

import './ProjectsPage.scss'

export default function ProjectsPage() {
    const { fetchState, sendRequest } = useFetch()

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                url: 'http://localhost:5000/api/v1/projects'
            }
            await sendRequest(options)

        }

        fetchData()

    }, [sendRequest])

    const handleFilter = async (e, str) => {
        e.preventDefault()
        console.log(str)
        const options = {
            url: 'http://localhost:5000/api/v1/projects'
        }
        await sendRequest(options)
    }

    return (
        <section className="section-projects">
            <h2 className="section-title section-title--text-primary">Latest Projects</h2>
            <Filtration handleFilter={handleFilter} />
            <div className="container">
                <div className="section-projects__projects-container">
                    {
                        fetchState.isLoading ?
                            <h2>Loading...</h2>
                            :
                            fetchState.error ?
                                <h2>{fetchState.error}</h2>
                                :
                                fetchState.data ?
                                    fetchState.data.projects.map(project => {
                                        return (
                                            <div key={project.id} className="section-projects__project"><Project modifiers='no-gutters' {...project} /></div>
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