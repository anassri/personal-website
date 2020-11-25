import React from 'react';
import Footer from './Footer';
import Home from './Home';
import LeftNav from './LeftNav';
import Navigation from './Navigation';
import About from './About';
import aidiesLogo from './images/aidies-logo.svg';
import aidiesScreen from './images/app-01.png';
import dearyLogo from './images/deary-logo.svg';
import dearyScreen from './images/app-04.png';
import aabLogo from './images/aab-logo.svg';
import aabScreen from './images/app-03.png';
import stLogo from './images/st-logo.svg';
import stScreen from './images/app-02.png';

function App() {
  const logos = [aidiesLogo, dearyLogo, aabLogo, stLogo];
  const screens = [aidiesScreen, dearyScreen, aabScreen, stScreen];
  const captions = ["Deary is a social media app built to help people keep in touch with the ones they care about.Developed with React, Python, PostgresQL, AWS",
                    "All-A-Bot is a custom Discord bot generator. AAB is a group project built to help Discord members generate quick bots to serve their needs. Developed with React, Python, PostgresQL",
                    "Aidies is an auction website built to help people auction off their work for charity. Developed with React, Node.js, PostgresQL, AWS",
                    "Sprint Turf is a simple project management app. ST is a group project created to provide a simple solution to developers. Developed with Vanilla JS, Node.js, PostgresQL"
                    ]
  return (
    <div className="body">
      <Navigation />
      <LeftNav />
      <Home />
      <About />
      
      <Footer />
    </div>

    );
}

export default App;
