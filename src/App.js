import React from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div>
      <div className="header-placeholder"></div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
