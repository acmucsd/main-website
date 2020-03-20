import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.less';

import Home from './pages/home';
import NavBar from './pages/navbar';
import Contact from './pages/contact';
import Events from './pages/events';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Events />
      <Contact />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
