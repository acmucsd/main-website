import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import './styles/style.less';

import Home from './pages/home/';
import NavBar from './pages/navbar';
import Contact from './pages/contact';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home />
        <Contact />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
