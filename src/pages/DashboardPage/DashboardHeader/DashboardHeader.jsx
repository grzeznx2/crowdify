import React from 'react'

// import './DashboardHeader.scss'

export default function DashboardHeader() {
    return (
        <header class="dashboard-header section-dashboard__header">
            <h3 class="heading-3 dashboard-header__title">Overview</h3>
            <div class="dashboard-header__buttons-container">
                <a href="#" class="button button--primary">Add Funds</a>
                <a href="#" class="button button--primary-inverse">Withdraw</a>
            </div>
        </header>
    )
}