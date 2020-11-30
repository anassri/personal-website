import React, {useRef} from 'react';
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
  const homeRef = useRef();
  const aboutRef = useRef();
  const dearyRef = useRef();
  const aabRef = useRef();
  const aidiesRef = useRef();
  const stRef = useRef();

  return (
    <div className="body">
      <Navigation 
        homeRef={homeRef}
        aboutRef={aboutRef}
        dearyRef={dearyRef}
      />
      <LeftNav 
        homeRef={homeRef}
        aboutRef={aboutRef}
        dearyRef={dearyRef}
        aabRef={aabRef}
        aidiesRef={aidiesRef}
        stRef={stRef}
      />
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Deary ref={dearyRef}/>
      <AllABot ref={aabRef}/>
      <Aidies ref={aidiesRef}/>
      <SprintTurf ref={stRef}/>
      <Footer ref={homeRef}/>
    </div>

    );
}

export default App;
