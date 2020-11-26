import React from 'react';
import Footer from './Footer';
import Home from './Home';
import LeftNav from './LeftNav';
import Navigation from './Navigation';
import About from './About';
import PortfolioTop from './PortfolioTop';
import PortfolioBottom from './PortfolioBottom';

function App() {
  
  return (
    <div className="body">
      <Navigation />
      <LeftNav />
      <Home />
      <About />
      <PortfolioTop />
      <PortfolioBottom />
      <Footer />
    </div>

    );
}

export default App;
