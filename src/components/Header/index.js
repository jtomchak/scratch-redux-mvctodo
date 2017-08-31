import React, { Component } from "react";
import TodoTextInput from "../Todo/TodoTextInput";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };
  render() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoTextInput onSave={this.handleSave} placeholder="et tu to do?" />
        </header>
      </div>
    );
  }
}
