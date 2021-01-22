import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { nanoid } from "nanoid";

import TaskMenu from "./components/TaskMenu";
import TaskShowBooks from "./components/TaskShowBooks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:3000/books")
  //     .then((res) => {
  //       const { books } = res.data;
  //       console.log({ books });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  componentDidMount() {
    const getBooks = async () => {
      const res = await axios.get("http://localhost:3000/books");
      this.setState({ books: res.data.books });
    };

    getBooks();
  }

  render() {
    return (
      <div className="App">
        <TaskMenu />
        <TaskShowBooks books={this.state.books} />
      </div>
    );
  }
}

export default App;
