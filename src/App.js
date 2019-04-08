import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes, { ChildRoutes, NoMatch } from "../src/services/router/index";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../src/services/session/store";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <LoadingBar />
          <button onClick={this.props.showLoadingBar.bind(this)}>
            Show LoadingBar
          </button>
          <button onClick={this.props.hideLoadingBar.bind(this)}>
            Hide LoadingBar
          </button>
          {Routes.map((route, i) => (
            <ChildRoutes key={i} {...route} />
          ))}
        </div>
      </Router>
    ); //<Route component={NoMatch} />
  }
}

var AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppComponent;
