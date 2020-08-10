import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import Loader from '../../components/Loader/Loader';
import LoanDetails from './Sections/LoanDetails/LoanDetails';
import ProjectDescription from './Sections/ProjectDescription/ProjectDescription';
import ProjectPresentation from './Sections/ProjectPresentation/ProjectPresentation';

import './ProjectPage.scss';

export default function ProjectPage() {
  const [project, setProject] = useState({});
  const { isLoading, error, sendRequest } = useFetch();
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const options = {
        url: `http://localhost:5000/api/v1/projects/${projectId}`,
      };
      const response = await sendRequest(options);
      if (response) {
        console.log(response);
        setProject(response.project);
      }
    };

    fetchProject();
  }, [projectId]);

  const {
    comments,
    createdAt,
    duration,
    endDate,
    imageUrl,
    interestPayments,
    interestPaymentsRate,
    interestPaymentsStart,
    interestRate,
    interestsDates,
    interestsNumber,
    investors,
    latestComments,
    location,
    minTarget,
    name,
    paid,
    startDate,
    status,
    summary,
    totalTarget,
    type,
  } = project;

  return (
    <>
      <Loader isLoading={isLoading} loadingComp="dots" error={error}>
        <ProjectPresentation
          duration={duration}
          imageUrl={imageUrl}
          interestRate={interestRate}
          location={location}
          name={name}
          paid={paid}
          minTarget={minTarget}
          totalTarget={totalTarget}
          type={type}
        />
        <LoanDetails
          duration={duration}
          interestPayments={interestPayments}
          interestRate={interestRate}
          minTarget={minTarget}
          totalTarget={totalTarget}
        />
        <ProjectDescription
          interestPaymentsStart={interestPaymentsStart}
          interestPaymentsRate={interestPaymentsRate}
          interestRate={interestRate}
          interestDates={interestsDates}
          interestsNumber={interestsNumber}
          endDate={endDate}
        />
      </Loader>
    </>
  );
}
