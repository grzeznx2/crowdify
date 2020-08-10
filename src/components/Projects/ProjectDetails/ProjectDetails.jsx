import React from 'react';

import { joinClasses } from '../../../utils/utils';

import './ProjectDetails.scss';

export default function ProjectDetails({
  interestRate,
  type,
  duration,
  location,
  modifiers,
  otherClasses,
}) {
  return (
    <div className={joinClasses('project-details', modifiers, otherClasses)}>
      <ul className="project-details__list">
        <li className="project-details__item">
          <span className="project-details__label">interest rate:</span>
          <span className="project-details__value">{interestRate}%</span>
        </li>
        <li className="project-details__item">
          <span className="project-details__label">type:</span>
          <span className="project-details__value">{type}</span>
        </li>
        <li className="project-details__item">
          <span className="project-details__label">period:</span>
          <span className="project-details__value">{duration} months</span>
        </li>
        <li className="project-details__item">
          <span className="project-details__label">location:</span>
          <span className="project-details__value">{location}</span>
        </li>
      </ul>
    </div>
  );
}
