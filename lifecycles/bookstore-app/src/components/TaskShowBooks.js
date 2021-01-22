import React, { Component } from "react";
import "./style.css";
import { Button } from "reactstrap";

import Book from "./Book";

class TaskShowBooks extends Component {
  render() {
    return (
      <div className="task-book">
        <center>
          <header>Bookstore</header>
        </center>

        <div className="main">
          <div className="search-box">
            <div className="search-bar">
              <input type="text" placeholder="Type Book Name......" />
              <img src="../img/search.svg" alt="search" width={16} />
            </div>
            <Button color="success">Search</Button>
          </div>

          <div className="content">
            <Book books={this.props.books} />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskShowBooks;
