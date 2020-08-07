import React, { useEffect, useState, useCallback, useRef } from 'react'

import useFetch from '../../hooks/useFetch'

import Filtration from '../../components/Filtration/Filtration'
import Pagination from '../../components/Pagination/Pagination'
import Project from '../../components/Project/Project'

import './ProjectsPage.scss'

export default function ProjectsPage() {
    const { isLoading, error, sendRequest } = useFetch()
    // determines whether API should include the total number of elements matching search params in response or not
    const [countDocuments, setCountDocuments] = useState(true)
    const [page, setPage] = useState(1)
    const [queryString, setQueryString] = useState('')
    const [projects, setProjects] = useState([])
    const [totalResults, setTotalResults] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                url: `http://localhost:5000/api/v1/projects?page=${page}&limit=6&countDocuments=${countDocuments}&${queryString}`
            }
            const response = await sendRequest(options)
            if (response) {
                setProjects(response.projects)
                if (response.totalResultsCount === 0 || response.totalResultsCount) setTotalResults(response.totalResultsCount)
                setCountDocuments(false)
            }
        }
        fetchData()
    }, [sendRequest, queryString, page])


    const handleFilter = useCallback(async (queryString) => {
        setQueryString(queryString)
        setCountDocuments(true)
        setPage(1)
    }, [])

    const changePage = page => {
        setPage(page)
    }

    return (
        <section className="section-projects">
            <h2 className="section-title section-title--text-primary">Latest Projects</h2>
            <Filtration handleFilter={handleFilter} />
            <div className="container">
                <div className="section-projects__projects-container">
                    {
                        isLoading ?
                            <h2>Loading...</h2>
                            :
                            error ?
                                <h2>{error}</h2>
                                :
                                projects.map(project => {
                                    return (
                                        <div key={project.id} className="section-projects__project"><Project modifiers='no-gutters' {...project} /></div>
                                    )
                                })
                    }
                </div>
            </div>
            {
                isLoading ?
                    null
                    :
                    error ?
                        null
                        :
                        <Pagination
                            changePage={changePage}
                            resultsCount={totalResults}
                            resPerPage={6}
                            page={page} />
            }
        </section>
    )
}