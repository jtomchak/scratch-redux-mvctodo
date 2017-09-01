import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionsCreators, bindActionCreators } from "redux";
import { connect } from "react-redux";

import Header from "./Header";
import MainSection from "./MainSection";
import * as TodoActions from "../actions";

const App = ({ todos, actions }) => {
  return (
    <div>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </div>
  );
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
