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
      <Route exact path='/projects' component={ProjectsPage} />
      <Route exact path='/project' component={ProjectPage} />
      <Footer />
    </div>
  );
}

export default App;
