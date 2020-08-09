import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

import Loader from '../../components/Loader/Loader'
import LoanDetails from './Sections/LoanDetails/LoanDetails'
import ProjectDescription from './Sections/ProjectDescription/ProjectDescription'
import ProjectPresentation from './Sections/ProjectPresentation/ProjectPresentation'

import './ProjectPage.scss'

export default function ProjectPage() {
    const [project, setProject] = useState({})
    const { isLoading, error, sendRequest } = useFetch()
    const { projectId } = useParams()

    useEffect(() => {

        const fetchProject = async () => {
            const options = {
                url: `http://localhost:5000/api/v1/projectss/${projectId}`
            }
            const response = await sendRequest(options)
            if (response) {
                console.log(response)
                setProject(response.project)
            }

        }

        fetchProject()

    }, [projectId])


    return (<>
        <Loader
            isLoading={isLoading}
            loadingComp='dots'
            error={error}
        >
            <ProjectPresentation />
            <LoanDetails />
            <ProjectDescription />
        </Loader>

    </>
    )
}