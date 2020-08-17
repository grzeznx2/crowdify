import React, { useEffect, useState, useCallback } from 'react'

import useFetch from '../../hooks/useFetch'

import Filtration from '../../components/Filtration/Filtration'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import Projects from '../../components/Projects/Projects'

import './ProjectsPage.scss'

export default function ProjectsPage() {
    const { isLoading, error, sendRequest } = useFetch()
    // determines whether API should include the total number of elements matching search params in response
    const [countDocuments, setCountDocuments] = useState(true)
    const [page, setPage] = useState(1)
    const [queryString, setQueryString] = useState('')
    const [projects, setProjects] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const resPerPage = 6

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                url: `/api/v1/projects?page=${page}&limit=${resPerPage}&countDocuments=${countDocuments}&${queryString}`
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
                    <Loader
                        isLoading={isLoading}
                        loadingComp='dots'
                        error={error}
                    >
                        <Projects
                            projects={projects}
                            projectModifiers='no-gutters'
                            wrapperClass="section-projects__project" />
                    </Loader>
                </div>
            </div>
            <Loader isLoading={isLoading}>
                <Pagination
                    changePage={changePage}
                    resultsCount={totalResults}
                    resPerPage={resPerPage}
                    page={page} />
            </Loader>
        </section>
    )
}