import React from 'react';
import Footer from './Footer';
import Home from './Home';
import LeftNav from './LeftNav';
import Navigation from './Navigation';
import About from './About';
import Deary from './Deary';
import Aidies from './Aidies';
import SprintTurf from './SprintTurf';
import AllABot from './AllABot';

function App() {
  
  return (
    <div className="body">
      <Navigation />
      <LeftNav />
      <Home />
      <About />
      <Deary />
      <AllABot />
      <Aidies />
      <SprintTurf />
      <Footer />
    </div>

    );
}

export default App;
