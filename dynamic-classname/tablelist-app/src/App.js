import React, { Component } from "react";
import Table from "./components/Table";
import "./App.css";

class App extends Component {
  render() {
    const userLists = [
      {
        firstName: "Mark",
        lastName: "Otto",
        handle: "@mdo",
      },
      {
        firstName: "Jacob",
        lastName: "Thornton",
        handle: "@fat",
      },
      {
        firstName: "Larry",
        lastName: "the Bird",
        handle: "@twitter",
      },
    ];
    return (
      <div className="App">
        <h2>Table List</h2>
        <Table lists={userLists} />
      </div>
    );
  }
}

export default App;
