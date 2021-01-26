import React, { useState } from "react";
import "./style.css";
import "antd/dist/antd.css";
import axios from "axios";
import { Button } from "antd";

// add components here
import User from "./User";

const TaskShowUsers = (props) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setName(value);
  };

  const handleKeyUp = (e) => {
    let value = e.target.value;

    if (e.key === "Enter" && value.trim()) {
      const query = async () => {
        const res = await axios.get(`http://localhost:3000/users/?q=${value}`);
        props.display(res.data.users);
        setName("");
      };
      query();
    }
  };

  const handleClick = () => {
    let value = name;

    if (value.trim()) {
      const query = async () => {
        const res = await axios.get(`http://localhost:3000/users/?q=${value}`);
        props.display(res.data.users);
        setName("");
      };
      query();
    }
  };
  return (
    <div className="TaskShowUsers">
      <center>
        <header>User</header>
      </center>

      <div className="main">
        <div className="search-box">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Type User Name......"
              value={name}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            <img src="../img/search.svg" alt="search" width={16} />
          </div>
          <Button type="primary" onClick={handleClick}>
            Search
          </Button>
        </div>

        <div className="content">
          <User users={props.users} />
        </div>
      </div>
    </div>
  );
};

export default TaskShowUsers;
