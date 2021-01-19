import React, { Component } from "react";
import "./style.css";

class TaskHeader extends Component {
  render() {
    return (
      <div className="task-header">
        <a href="https://www.google.com/" className="unit-link">
          Gmail
        </a>

        <a href="https://www.google.com/" className="unit-link">
          Images
        </a>

        <img src="../img/menu.png" alt="icon-menu" width={16} />

        <img src="../img/avatar.png" alt="avatar" className="avatar" />
      </div>
    );
  }
}

export default TaskHeader;
