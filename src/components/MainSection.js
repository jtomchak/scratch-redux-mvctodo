import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

const TODO_FILTERS = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: todo => !todo.completed,
  SHOW_COMPLETED: todo => todo.completed
};

console.log(TODO_FILTERS);
class MainSection extends Component {
  state = { filter: SHOW_ALL };

  handleClearCompleted = () => {
    this.props.actions.onClearCompleted();
  };

  handleShow = filter => {
    this.setState({ filter });
  };

  renderFooter(completedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
        />
      );
    }
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filterTodos = todos.filter(TODO_FILTERS[filter]);
    console.log(filterTodos);
    const completedCount = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );

    const todoItems = filterTodos.map(todo => (
      <TodoItem key={todo.id} todo={todo} {...actions} />
    ));

    return (
      <section className="main">
        <ul className="todo-list">{todoItems}</ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

export default MainSection;
