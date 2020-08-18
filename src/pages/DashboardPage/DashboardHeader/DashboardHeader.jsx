import React, { useState } from 'react'

import Button from '../../../components/Button/Button'
import AddFundsModal from '../../../components/Modals/AddFundsModal/AddFundsModal'
import WithdrawFundsModal from '../../../components/Modals/WithdrawFundsModal/WithdrawFundsModal'

import './DashboardHeader.scss'

export default function DashboardHeader({ title }) {
    const [isAddFundsModalOpen, setIsAddFundsModalOpen] = useState(false)
    const [isWithdrawFundsModalOpen, setIsWithdrawFundsModalOpen] = useState(false)

    const openAddFundsModal = () => setIsAddFundsModalOpen(true)
    const closeAddFundsModal = () => setIsAddFundsModalOpen(false)

    const openWithdrawFundsModal = () => setIsWithdrawFundsModalOpen(true)
    const closeWithdrawFundsModal = () => setIsWithdrawFundsModalOpen(false)

    return (
        <>
            <AddFundsModal isModalOpen={isAddFundsModalOpen} handleClick={closeAddFundsModal} />
            <WithdrawFundsModal isModalOpen={isWithdrawFundsModalOpen} handleClick={closeWithdrawFundsModal} />
            <header class="dashboard-header section-dashboard__header">
                <h3 class="heading-3 dashboard-header__title">{title}</h3>
                <div class="dashboard-header__buttons-container">
                    <Button handleClick={openAddFundsModal} modifiers='primary'>add funds</Button>
                    <Button handleClick={openWithdrawFundsModal} modifiers='warning'>withdraw</Button>
                </div>
            </header>
        </>
    )
}