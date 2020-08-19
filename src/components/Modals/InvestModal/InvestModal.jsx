import React from 'react'

import InvestForm from '../../Form/Forms/InvestForm'
import Modal from '../Modal'

export default function InvestModal({ isModalOpen, closeModal }) {
    return (
        <Modal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            title='Invest in project'
            outerContainerModifiers='bg-blue'
            contentModifiers='center'
        >
            <InvestForm closeModal={closeModal} />
        </Modal>
    )
}