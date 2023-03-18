import React, { useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import LeftNav from "./LeftNav";
import Navigation from "./Navigation";
import About from "./About";
import Deary from "./Deary";
import Build from "./Build";
import SprintTurf from "./SprintTurf";
import AllABot from "./AllABot";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const LandingPage = () => {
  const [pageVisible, setPageVisible] = useState("home");
  return (
    <>
      <Navigation pageVisible={pageVisible} />
      <LeftNav pageVisible={pageVisible} />
      <Home setPageVisible={setPageVisible} />
      <About setPageVisible={setPageVisible} />
      <Build setPageVisible={setPageVisible} />
      <Deary setPageVisible={setPageVisible} />
      <AllABot setPageVisible={setPageVisible} />
      <Footer setPageVisible={setPageVisible} />
    </>
  );
};
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
