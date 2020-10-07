import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/style.less';

import Home from './pages/home';
import NavBar from './pages/navbar';
import Events from './pages/events';
import Communities from './pages/communities';
import Contact from './pages/contact';
import Sponsorship from './pages/sponsorship';
import AboutUs from './pages/about-us';
import About from './pages/about';
import GetInvolved from './pages/get-involved';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/sponsor">
          <Sponsorship />
        </Route>
        <Route path="/">
          <Home />
          <About />
          <Events />
          <Communities />
          <GetInvolved />
        </Route>
      </Switch>
      <Contact />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
