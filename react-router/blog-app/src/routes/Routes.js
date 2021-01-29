import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// add components here
import Nav from "../components/Nav";
import MainMenu from "../components/MainMenu";
import About from "../components/About";
import Blog from "../components/Blog";

const Routes = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" component={MainMenu} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
