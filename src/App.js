import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'

function App() {
  return (
    <div>
      <div className="header-placeholder"></div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/auth' component={AuthPage} />
      <Route exact path='/projects/:pid' component={ProjectPage} />
      <Route exact path='/projects' component={ProjectsPage} />
      <Footer />
    </div>
  );
}

export default App;
