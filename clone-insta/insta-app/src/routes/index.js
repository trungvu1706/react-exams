import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import MainLayout from "../layouts/MainLayout";

import { Login, Home } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PublicRoute path="/" component={Home} layout={MainLayout} />
      </Switch>
    </Router>
  );
};

export default Routes;
