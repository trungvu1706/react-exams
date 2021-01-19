import React, { Component } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput";
import TaskButton from "./components/TaskButton";
import TaskHeader from "./components/TaskHeader";
import TaskFooter from "./components/TaskFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskHeader />
        <TaskInput />
        <TaskButton />
        <TaskFooter />
      </div>
    );
  }
}

export default App;
