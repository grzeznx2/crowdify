import React, { useState } from 'react'

import AddFundsModal from '../../../components/Modals/AddFundsModal/AddFundsModal'

import './DashboardHeader.scss'

export default function DashboardHeader({ title }) {
    const [isAddFundsModalOpen, setIsAddFundsModalOpen] = useState(false)
    return (
        <>
            <AddFundsModal isModalOpen={isAddFundsModalOpen} />
            <header class="dashboard-header section-dashboard__header">
                <h3 class="heading-3 dashboard-header__title">{title}</h3>
                <div class="dashboard-header__buttons-container">
                    <a href="#" class="button button--primary">Add Funds</a>
                    <a href="#" class="button button--primary-inverse">Withdraw</a>
                </div>
            </header>
        </>
    )
}