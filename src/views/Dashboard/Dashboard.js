import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

import Routes, { ChildRoutes } from "../../services/router/index";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">
            <img
              src="../favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            &nbsp;Dashboard
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/statistics">
                  Statistics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/users">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          {Routes.find(route => {
            return route.path === "/dashboard";
          }).routes.map((route, i) => (
            <ChildRoutes key={i} {...route} />
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
