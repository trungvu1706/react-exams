import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// add componets here
import Nav from "./components/Nav";
import TaskShowBooks from "./components/TaskShowBooks";
import TaskShowUsers from "./components/TaskShowUsers";

function App(props) {
  useEffect(() => {
    getBooks();
    getUsers();
  }, []);

  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  const getBooks = async () => {
    const res = await axios.get("http://localhost:3000/books");
    console.log(res);
    setBooks(res.data.books);
  };

  // show result when find value on input bar
  const showResultBook = (value) => {
    setBooks(value);
    console.log(value);
  };

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    console.log(res);
    setUsers(res.data.users);
  };

  const showResultUser = (value) => {
    setUsers(value);
    console.log(value);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/books">
            <TaskShowBooks books={books} display={showResultBook} />
          </Route>
          <Route path="/user">
            <TaskShowUsers users={users} display={showResultUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
