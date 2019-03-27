import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes, { ChildRoutes, NoMatch } from "../src/services/router/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {Routes.map((route, i) => (
            <ChildRoutes key={i} {...route} />
          ))}
          <Route component={NoMatch} />
        </div>
      </Router>
    );
  }
}

export default App;
