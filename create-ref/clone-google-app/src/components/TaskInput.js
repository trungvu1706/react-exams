import React, { Component } from "react";
import "./style.css";

class TaskInput extends Component {
  constructor() {
    super();
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus(); // giup con tro chuot chi ngay vao input
  }

  render() {
    return (
      <div className="task-input">
        <div className="logo">
          <img
            height={72}
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </div>

        <div className="form">
          <span className="icon">
            <img src="../img/search.svg" alt="icon" width={18} />
          </span>

          <input type="text" ref={this.inputElement} />
          <span className="icon">
            <img src="../img/ggmic.svg" alt="icon" width={18} />
          </span>
        </div>
      </div>
    );
  }
}

export default TaskInput;
