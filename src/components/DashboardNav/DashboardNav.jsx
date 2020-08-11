import React from 'react'

import './DashboardNav.scss'

export default function DashboardNav() {
    return (
        <nav class="dashboard-nav">
            <ul class="dashboard-nav__list">
                <li class="dashboard-nav__item">
                    <a href="#" class="dashboard-nav__link dashboard-nav__link--active">Overview</a>
                </li>
                <li class="dashboard-nav__item">
                    <a href="#" class="dashboard-nav__link">Transactions</a>
                </li>
                <li class="dashboard-nav__item">
                    <a href="#" class="dashboard-nav__link">Investments</a>
                </li>
                <li class="dashboard-nav__item">
                    <a href="#" class="dashboard-nav__link">Profile</a>
                </li>
                <li class="dashboard-nav__item">
                    <a href="#" class="dashboard-nav__link">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}