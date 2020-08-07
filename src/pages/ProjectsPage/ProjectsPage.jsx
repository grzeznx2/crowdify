import React, { useEffect, useState, useCallback } from 'react'

import useFetch from '../../hooks/useFetch'

import Filtration from '../../components/Filtration/Filtration'
import Pagination from '../../components/Pagination/Pagination'
import Project from '../../components/Project/Project'

import './ProjectsPage.scss'

export default function ProjectsPage() {
    const { fetchState, sendRequest } = useFetch()
    const [countDocuments, setCountDocuments] = useState(true)
    const [page, setPage] = useState(1)
    const [queryString, setQueryString] = useState('')

    useEffect(() => {
        console.log('I work!')
        const fetchData = async () => {
            const options = {
                url: `http://localhost:5000/api/v1/projects?page=${page}&countDocuments=${countDocuments}&${queryString}`
            }
            await sendRequest(options)

        }
        setCountDocuments(false)

        fetchData()

    }, [sendRequest, queryString, page, countDocuments])

    const handleFilter = useCallback(async (queryString) => {
        setQueryString(queryString)
        setCountDocuments(true)
    }, [queryString])

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
            <Pagination />
        </section>
    )
}