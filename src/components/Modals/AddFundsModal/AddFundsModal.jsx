import React from 'react'

import AddFundsForm from '../../Form/Forms/AddFundsForm'
import Modal from '../Modal'

export default function AddFundsModal({ isModalOpen, handleClick }) {
    return (
        <Modal
            isModalOpen={isModalOpen}
            handleClick={handleClick}
            title='Add funds to your account'
            outerContainerModifiers='bg-blue'
            contentModifiers='center'
        >
            <AddFundsForm handleClick={handleClick} />
        </Modal>
    )
}