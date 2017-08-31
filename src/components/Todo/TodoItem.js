import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class TodoItem extends Component {
  state = {
    editing: false
  };
  render() {
    return (
      <li
        className={classnames({
          completed: false,
          editing: this.state.editing
        })}
      >
        {this.props.todo.text}
      </li>
    );
  }
}

export default TodoItem;
