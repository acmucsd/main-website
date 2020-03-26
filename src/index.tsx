import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/style.less';

import Home from './pages/home';
import NavBar from './pages/navbar';
import Contact from './pages/contact';
import Sponsorship from './pages/sponsorship';


const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/sponsor'>
            <Sponsorship />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Contact />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
