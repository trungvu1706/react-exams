import React, { Component } from "react";
import "./style.css";

class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      todoName: "", // abc
    };
  }

  render() {
    // console.log(this.state.todoName);
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.todoName}
          onChange={(e) => this.setState({ todoName: e.target.value })}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              this.props.addTodo(this.state.todoName);
            }
          }}
        />
        <button
          className="btn-ok"
          onClick={() => this.props.addTodo(this.state.todoName)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
