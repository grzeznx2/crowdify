import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Logout from './components/Logout/Logout'
import AuthPage from './pages/AuthPage/AuthPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'

function App() {
  const user = useSelector(state => state.user.currentUser)

  return (
    <div>
      <div className="header-placeholder"></div>
      <Header user={user} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/auth'>
        {user ? <Redirect to='/dashboard/overview' /> : <AuthPage />}
      </Route>
      <Route path='/dashboard' component={DashboardPage}>
        {user ? <DashboardPage user={user} /> : <Redirect to='/auth' />}
      </Route>
      <Route exact path='/projects/:projectId' component={ProjectPage} />
      <Route exact path='/projects' component={ProjectsPage} />
      <Route exact path='/logout' component={Logout} />
      <Footer />
    </div>
  );
}

export default App;
