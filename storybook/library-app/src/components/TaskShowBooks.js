import React, { useState } from "react";
import "./style.css";
import "antd/dist/antd.css";
import axios from "axios";
import { Button } from "antd";

// add components here
import Book from "./Book";

const TaskShowBooks = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setTitle(value);
  };

  const handleKeyup = (e) => {
    let value = e.target.value;

    if (e.key === "Enter" && value.trim()) {
      const query = async () => {
        const res = await axios.get(`http://localhost:3000/books/?q=${value}`);
        props.display(res.data.books);
        setTitle("");
      };
      query();
    }
  };

  const handleClick = () => {
    let value = title;

    if (value.trim()) {
      const query = async () => {
        const res = await axios.get(`http://localhost:3000/books/?q=${value}`);
        props.display(res.data.books);
        setTitle("");
      };
      query();
    }
  };

  return (
    <div className="TaskShowBooks">
      <center>
        <header>Bookstore</header>
      </center>

      <div className="main">
        <div className="search-box">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Type Book Name......"
              value={title}
              onChange={handleChange}
              onKeyUp={handleKeyup}
            />
            <img src="../img/search.svg" alt="search" width={16} />
          </div>
          <Button type="primary" onClick={handleClick}>
            Search
          </Button>
        </div>

        <div className="content">
          <Book books={props.books} />
        </div>
      </div>
    </div>
  );
};

export default TaskShowBooks;

// call api get books query  - null
// khi search lay gi tri cua input dua vao state
