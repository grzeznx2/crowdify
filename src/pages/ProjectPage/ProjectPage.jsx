import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

import Loader from '../../components/Loader/Loader'
import Comments from './Comments/Comments'
import LoanDetails from './LoanDetails/LoanDetails'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import ProjectPresentation from './ProjectPresentation/ProjectPresentation'
import { setProject } from '../../redux/project/actions'
import { setCommentsRates } from '../../redux/commentsRates/actions'

import './ProjectPage.scss'

export default function ProjectPage() {
  const dispatch = useDispatch()
  const project = useSelector(state => state.project.currentProject)
  const { isLoading, error, sendRequest } = useFetch()
  const { projectId } = useParams()

  const flattenTree = tree => {
    const flattenedTree = []

    const iterate = node => {
      for (let i = 0; i < node.length; i++) {
        flattenedTree.push(node[i])
        if (node[i].comments.length !== 0) iterate(node[i].comments)
      }
    }

    iterate(tree)
    return flattenedTree
  }

  useEffect(() => {
    // fetch project only if there is no project form persisted state or we want to fetch different project
    if (!project || project._id !== projectId) {
      const fetchProject = async () => {
        const options = {
          url: `/api/v1/projects/${projectId}`,
        }

        const response = await sendRequest(options)
        const flattenedComments = flattenTree(response.project.comments)
        if (response) {
          dispatch(setProject({ ...response.project, comments: flattenedComments }))
          dispatch(setCommentsRates(response.project.commentsRates))
        }
      }

      fetchProject()
    }
  }, [projectId, project, sendRequest])

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
      <Comments comments={project.comments} />
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
