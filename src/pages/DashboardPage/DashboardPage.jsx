import React, { useState } from 'react'
import { Route, Redirect, useRouteMatch } from 'react-router-dom'

import DashboardHeader from './DashboardHeader/DashboardHeader'
import DashboardNav from '../../components/DashboardNav/DashboardNav'
import Investments from './Investments/Investments'
import Overview from './Overview/Overview'
import Profile from './Profile/Profile'
import Transactions from './Transactions/Transactions'

import './DashboardPage.scss'

export default function DashboardPage({ user }) {
  const { firstName, lastName, email } = user
  const [title, setTitle] = useState('overview')

  const changeTitle = newTitle => setTitle(newTitle)

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
            <DashboardHeader title={title} />
            <div class="section-dashboard__content">
              <section class="overview">
                <div class="overview__container">
                  <Route path={`${match.url}/overview`}>
                    <Overview changeTitle={() => changeTitle('overview')} />
                  </Route>
                  <Route path={`${match.url}/transactions`}>
                    <Transactions changeTitle={() => changeTitle('transactions')} />
                  </Route>
                  <Route path={`${match.url}/investments`}>
                    <Investments changeTitle={() => changeTitle('investments')} />
                  </Route>
                  <Route path={`${match.url}/profile`}>
                    <Profile changeTitle={() => changeTitle('profile')} firstName={firstName} lastName={lastName} email={email} />
                  </Route>
                  <Redirect to={`${match.url}/overview`} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}