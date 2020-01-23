import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.less";

import Page1 from "./pages/page1/";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="pages">
        <Page1 />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
