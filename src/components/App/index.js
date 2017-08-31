import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionsCreators } from "redux";
import { connect } from "react-redux";

import Header from "../Header";
import MainSection from "../Main";
// import * as TodoActions from "../../actions";

const App = () => (
  <div>
    <Header />
    <MainSection todos={{ todo: 1 }} />
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default App;
