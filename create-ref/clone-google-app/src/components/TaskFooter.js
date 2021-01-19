import React, { Component } from "react";
import "./style.css";

class TaskFooter extends Component {
  render() {
    return (
      <div className="task-footer">
        <div className="footer">
          <div className="footer-rlg">
            <span>Vietnam</span>
          </div>

          <span className="left-term unit-link-terms">
            <a href="https://www.google.com/">Advertising</a>
            <a href="https://www.google.com/">Business</a>
            <a href="https://www.google.com/">About</a>
            <a href="https://www.google.com/">How Search works</a>
          </span>

          <span className="right-term unit-link-terms">
            <a href="https://www.google.com/">Privacy</a>
            <a href="https://www.google.com/">Terms</a>
            <a href="https://www.google.com/">Settings</a>
          </span>
        </div>
      </div>
    );
  }
}

export default TaskFooter;
