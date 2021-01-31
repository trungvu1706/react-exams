import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//add components

import { Login, Home } from "../components";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
