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
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const LandingPage = () => {
  
  return (
    <>
      <Home />
      <About />
      <Deary />
      <AllABot />
      <Aidies />
      <SprintTurf />
      <Footer />
    </>
  )
}
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Navigation />
        <LeftNav/>
        <Switch>
          <Route path="/" component={LandingPage} />

        </Switch>
      </BrowserRouter>
      
    </div>

    );
}

export default App;
