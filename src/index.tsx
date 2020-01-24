import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.less';

import Home from './pages/home/';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="pages">
        <Home />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
