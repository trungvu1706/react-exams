import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import TaskMenu from "./components/TaskMenu";
import TaskShowBooks from "./components/TaskShowBooks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    const getBooks = async () => {
      const res = await axios.get("http://localhost:3000/books");
      // console.log(res);
      this.setState({ books: res.data.books });
    };

    getBooks();
  }

  showResult = (value) => {
    this.setState({
      books: value,
    });
    console.log(value);
  };

  render() {
    return (
      <div className="App">
        <TaskMenu />
        <TaskShowBooks books={this.state.books} display={this.showResult} />
      </div>
    );
  }
}

export default App;
