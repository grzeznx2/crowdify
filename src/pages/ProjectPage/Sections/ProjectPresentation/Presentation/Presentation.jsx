import React from 'react';

import CircleBar from '../../../../../components/Projects/CircleBar/CircleBar';
import ProjectDetails from '../../../../../components/Projects/ProjectDetails/ProjectDetails';

import './Presentation.scss';

export default function Presentation({
  imageUrl,
  duration,
  interestRate,
  location,
  name,
  paid,
  minTarget,
  totalTarget,
  type,
}) {
  return (
    <div class="presentation">
      <div class="presentation__container presentation__container--title-container">
        <div class="presentation__title-box">
          <h3 class="heading-3">{location}</h3>
          <h2 class="heading-2 text-bold presentation__title">{name}</h2>
          <a href="#" class="button button--primary">
            Invest
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        class="presentation__container presentation__container--image-container"
      >
        <div class="presentation__target-details-container">
          <div class="presentation__target-box">
            <CircleBar
              paid={paid}
              minTarget={minTarget}
              totalTarget={totalTarget}
              modifiers="bg-dark"
            />
          </div>
          <div class="presentation__details-box">
            <ProjectDetails
              interestRate={interestRate}
              type={type}
              duration={duration}
              location={location}
              modifiers={'bg-dark'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
