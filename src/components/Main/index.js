import React, { Component } from "react";
import TodoItem from "../Todo/TodoItem";

class MainSection extends Component {
  render() {
    const { todos, actions } = this.props;
    const todoItems = todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} {...actions} />
    ));
    console.log(todoItems);
    return (
      <section className="main">
        <ul className="todo-list">{todoItems}</ul>
      </section>
    );
  }
}

export default MainSection;
