import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

import './DashboardNav.scss'

export default function DashboardNav() {
    const match = useRouteMatch()

    return (
        <nav className="dashboard-nav">
            <ul className="dashboard-nav__list">
                <li className="dashboard-nav__item">
                    <NavLink to={`${match.url}/overview`} activeClassName='dashboard-nav__link--active' className="dashboard-nav__link">Overview</NavLink>
                </li>
                <li className="dashboard-nav__item">
                    <NavLink to={`${match.url}/transactions`} activeClassName='' className="dashboard-nav__link">Transactions</NavLink>
                </li>
                <li className="dashboard-nav__item">
                    <NavLink to={`${match.url}/investments`} activeClassName='' className="dashboard-nav__link">Investments</NavLink>
                </li>
                <li className="dashboard-nav__item">
                    <NavLink to={`${match.url}/profile`} activeClassName='' className="dashboard-nav__link">Profile</NavLink>
                </li>
                <li className="dashboard-nav__item">
                    <NavLink to={`${match.url}/contact`} activeClassName='' className="dashboard-nav__link">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}