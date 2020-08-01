import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {
  return (
    <div>
      <div className="header-placeholder"></div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/auth' component={AuthPage} />
      <Footer />
    </div>
  );
}

export default App;
