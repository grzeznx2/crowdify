import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div>
      <div className="header-placeholder"></div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Footer />
    </div>
  );
}

export default App;
