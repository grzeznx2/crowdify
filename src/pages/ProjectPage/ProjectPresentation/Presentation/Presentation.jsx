import React, { useState } from 'react'

import Button from '../../../../components/Button/Button'
import CircleBar from '../../../../components/Projects/CircleBar/CircleBar'
import InvestModal from '../../../../components/Modals/InvestModal/InvestModal'
import ProjectDetails from '../../../../components/Projects/ProjectDetails/ProjectDetails'

import './Presentation.scss'

export default function Presentation({ imageUrl, duration, interestRate, location, name, paid, minTarget, totalTarget, type }) {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false)

  const openInvestModal = () => setIsInvestModalOpen(true)
  const closeInvestModal = () => setIsInvestModalOpen(false)

  return (
    <>
      <InvestModal isModalOpen={isInvestModalOpen} closeModal={closeInvestModal} />
      <div class="presentation">
        <div class="presentation__container presentation__container--title-container">
          <div class="presentation__title-box">
            <h3 class="heading-3">{location}</h3>
            <h2 class="heading-2 text-bold presentation__title">{name}</h2>
            <Button modifiers="primary" handleClick={openInvestModal}>
              invest
            </Button>
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
              <CircleBar paid={paid} minTarget={minTarget} totalTarget={totalTarget} modifiers="bg-dark" />
            </div>
            <div class="presentation__details-box">
              <ProjectDetails interestRate={interestRate} type={type} duration={duration} location={location} modifiers={'bg-dark'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
