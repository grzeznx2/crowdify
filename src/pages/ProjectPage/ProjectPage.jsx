import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

import Loader from '../../components/Loader/Loader'
import Comments from './Comments/Comments'
import LoanDetails from './LoanDetails/LoanDetails'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import ProjectPresentation from './ProjectPresentation/ProjectPresentation'

import './ProjectPage.scss'

export default function ProjectPage() {
  const [project, setProject] = useState(null)
  const { isLoading, error, sendRequest } = useFetch()
  const { projectId } = useParams()

  useEffect(() => {
    const fetchProject = async () => {
      const options = {
        url: `/api/v1/projects/${projectId}`,
      }
      const response = await sendRequest(options)
      if (response) {
        setProject(response.project)
      }
    }

    fetchProject()
  }, [projectId, sendRequest])

  const markup = project ? (
    <>
      <ProjectPresentation
        duration={project.duration}
        imageUrl={project.imageUrl}
        interestRate={project.interestRate}
        location={project.location}
        name={project.name}
        paid={project.paid}
        minTarget={project.minTarget}
        totalTarget={project.totalTarget}
        type={project.type}
      />
      <LoanDetails
        duration={project.duration}
        interestPayments={project.interestPayments}
        interestRate={project.interestRate}
        minTarget={project.minTarget}
        totalTarget={project.totalTarget}
      />
      <ProjectDescription
        duration={project.duration}
        interestPaymentsStart={project.interestPaymentsStart}
        interestPaymentsRate={project.interestPaymentsRate}
        interestRate={project.interestRate}
        interestsDates={project.interestsDates}
        endDate={project.endDate}
        summary={project.summary}
      />
      <Comments />
    </>
  ) : null

  return (
    <>
      <Loader isLoading={isLoading} loadingComp="dots" error={error}>
        {markup}
      </Loader>
    </>
  )
}
