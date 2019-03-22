import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import Dashboard from "./views/Dashboard/Dashboard";
//mport LoadingBar from "react-redux-loading-bar";

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
    //<LoadingBar />
  }
}

export default App;
