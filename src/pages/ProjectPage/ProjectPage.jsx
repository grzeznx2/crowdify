import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import Loader from '../../components/Loader/Loader';
import LoanDetails from './Sections/LoanDetails/LoanDetails';
import ProjectDescription from './Sections/ProjectDescription/ProjectDescription';
import ProjectPresentation from './Sections/ProjectPresentation/ProjectPresentation';

import './ProjectPage.scss';

export default function ProjectPage() {
  const [project, setProject] = useState(null);
  const { isLoading, error, sendRequest } = useFetch();
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const options = {
        url: `http://localhost:5000/api/v1/projects/${projectId}`,
      };
      const response = await sendRequest(options);
      if (response) {
        setProject(response.project);
      }
    };

    fetchProject();
  }, [projectId, sendRequest]);


  const markup = project ?
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
        interestsNumber={project.interestsNumber}
        endDate={project.endDate}
      />
    </> : null

  return (
    <>
      <Loader isLoading={isLoading} loadingComp="dots" error={error}>
        {markup}
      </Loader>
    </>
  );
}
