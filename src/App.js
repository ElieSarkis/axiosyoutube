import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.body.style = "margin: 0rem";
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
