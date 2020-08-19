import React from 'react'

import WithdrawFundsForm from '../../Form/Forms/WithdrawFundsForm'
import Modal from '../Modal'

export default function WithdrawFundsModal({ isModalOpen, closeModal }) {
    return (
        <Modal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            title='Withdraw funds'
            outerContainerModifiers='bg-red'
            contentModifiers='center'
            text='In case of withdrawal from the investment, a 5% fee will be charged!'
        >
            <WithdrawFundsForm closeModal={closeModal} />
        </Modal>
    )
}