import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import DashboardNav from '../../components/DashboardNav/DashboardNav'
import Investments from './Investments/Investments'
import Overview from './Overview/Overview'
import Profile from './Profile/Profile'
import Transactions from './Transactions/Transactions'

import './DashboardPage.scss'

export default function DashboardPage() {
  const match = useRouteMatch()

  return (
    <section class="section-dashboard">
      <div class="container">
        <div class="section-dashboard__container">
          <div class="section-dashboard__nav">
            <div class="sticky-container sticky-container--dashboard-nav">
              <DashboardNav />
            </div>
          </div>
          <div class="section-dashboard__main">
            <header class="dashboard-header section-dashboard__header">
              <h3 class="heading-3 dashboard-header__title">Overview</h3>
              <div class="dashboard-header__buttons-container">
                <a href="#" class="button button--primary">Add Funds</a>
                <a href="#" class="button button--primary-inverse">Withdraw</a>
              </div>
            </header>
            <div class="section-dashboard__content">
              <section class="overview">
                <div class="overview__container">
                  <Route path={`${match.url}/overview`} component={Overview} />
                  <Route path={`${match.url}/transactions`} component={Transactions} />
                  <Route path={`${match.url}/investments`} component={Investments} />
                  <Route path={`${match.url}/profile`} component={Profile} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}