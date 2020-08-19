import React from 'react'

import AddFundsForm from '../../Form/Forms/AddFundsForm'
import Modal from '../Modal'

export default function AddFundsModal({ isModalOpen, closeModal }) {
    return (
        <Modal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            title='Add funds to your account'
            outerContainerModifiers='bg-blue'
            contentModifiers='center'
        >
            <AddFundsForm closeModal={closeModal} />
        </Modal>
    )
}