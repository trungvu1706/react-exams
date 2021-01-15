import React, { Component } from "react";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList";
import "./App.css";
import AddButton from "./components/AddButton";
import AddTodo from "./components/AddTodo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      isShowInput: false,
    };
  }

  handleUpdateItem = (id) => {
    const cloneTodos = this.state.todos;

    cloneTodos.map((todo) => {
      // console.log(todo);
      if (todo.id === id) {
        // console.log("match", todo);
        todo.isComplete = !todo.isComplete;
      }
    });

    this.setState({ todos: cloneTodos });
  };

  handleCreateItem = (title) => {
    const cloneTodos = this.state.todos; // []
    cloneTodos.push({
      id: nanoid(),
      title,
      isComplete: false,
    });

    this.setState({ todos: cloneTodos, isShowInput: false });
  };

  handleRemoveItem = (id) => {
    const cloneTodos = this.state.todos;
    let todoIndex = cloneTodos.findIndex((todo) => todo.id === id); // delete theo index neu todo.id = id

    cloneTodos.splice(todoIndex, 1);
    this.setState({ todos: cloneTodos }); // thay doi theo value vua xoa
  };

  render() {
    const completedTodos = this.state.todos.filter(
      (completeItem) => completeItem.isComplete === true
    );

    const doingTodos = this.state.todos.filter(
      (incompleteItem) => incompleteItem.isComplete === false
    );

    return (
      <div className="App">
        <div className="header">
          <i className="fas fa-bars"></i>
          <header>dailist</header>
        </div>

        {this.state.todos.length < 1 ? (
          <div className="nothing-here">
            <img width={400} height={400} src="./img/empty.png" />
            <p>nothing here !</p>
          </div>
        ) : (
          <div>
            <TodoList
              todos={doingTodos}
              title={"upcoming"}
              onClick={this.handleUpdateItem}
              onDelete={this.handleRemoveItem}
            />
            <TodoList
              todos={completedTodos}
              title={"finished"}
              onClick={this.handleUpdateItem}
            />
          </div>
        )}

        {this.state.isShowInput && <AddTodo addTodo={this.handleCreateItem} />}

        <AddButton onClickButton={() => this.setState({ isShowInput: true })} />
      </div>
    );
  }
}

export default App;
