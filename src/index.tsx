import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/style.less';

import Home from './pages/home/';
import AboutUs from './pages/about-us/';
import Contact from './pages/contact/'
import Sponsorship from './pages/sponsorship/'


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/sponsorship" component={Sponsorship} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
