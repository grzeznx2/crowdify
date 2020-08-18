import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import DashboardHeader from './DashboardHeader/DashboardHeader'
import DashboardNav from '../../components/DashboardNav/DashboardNav'
import Investments from './Investments/Investments'
import Overview from './Overview/Overview'
import Profile from './Profile/Profile'
import Transactions from './Transactions/Transactions'

import './DashboardPage.scss'

export default function DashboardPage({ user }) {
  const { firstName, lastName, email } = user

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
            <DashboardHeader />
            <div class="section-dashboard__content">
              <section class="overview">
                <div class="overview__container">
                  <Route path={`${match.url}/overview`} component={Overview} />
                  <Route path={`${match.url}/transactions`} component={Transactions} />
                  <Route path={`${match.url}/investments`} component={Investments} />
                  <Route path={`${match.url}/profile`}>
                    <Profile firstName={firstName} lastName={lastName} email={email} />
                  </Route>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}