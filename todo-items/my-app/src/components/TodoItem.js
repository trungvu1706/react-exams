import React, { Component } from "react";
import "./style.css";

class TodoItem extends Component {
  render() {
    const { todo, onClick, onDelete } = this.props;

    return (
      <div className="todo-item" onClick={() => onClick(todo.id)}>
        <p>{todo.title}</p>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
