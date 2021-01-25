import React, { Component } from "react";
import "./style.css";
import "antd/dist/antd.css";
import axios from "axios";
import { Button } from "antd";

//add component
import Book from "./Book";

class TaskShowBooks extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      size: "large",
    };
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      title: value,
    });
  };

  handleKeyup = (e) => {
    let value = e.target.value;

    if (e.key === "Enter" && value.trim()) {
      const query = async () => {
        const res = await axios.get(`http://localhost:3000/books/?q=${value}`);
        this.props.display(res.data.books);
        this.setState({
          title: "",
        });
      };
      query();
    }
  };

  handleClick = () => {
    let value = this.state.title;

    if (value.trim()) {
      const query = async () => {
        const res = await axios.get(`http://localhost:3000/books/?q=${value}`);
        this.props.display(res.data.books);
        this.setState({
          title: "",
        });
      };
      query();
    }
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div className="task-book">
        <center>
          <header>Bookstore</header>
        </center>

        <div className="main">
          <div className="search-box">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Type Book Name......"
                value={this.state.title}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyup}
              />
              <img src="../img/search.svg" alt="search" width={16} />
            </div>
            <Button type="primary" size={size} onClick={this.handleClick}>
              Search
            </Button>
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
