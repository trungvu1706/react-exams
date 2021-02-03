import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import { TaskShowBooks, TaskShowUsers, Nav, AddToCart } from "../components";
import { BookProvider } from "../contextApis/Context";

const Routes = () => {
  return (
    <BookProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/book" component={TaskShowBooks} />
          <Route path="/user" component={TaskShowUsers} />
          <Route path="/cart" component={AddToCart} />
        </Switch>
      </Router>
    </BookProvider>
  );
};
export default Routes;
