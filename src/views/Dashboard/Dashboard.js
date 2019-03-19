import React, { Component } from 'react';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Route,
    Link/*,
    Redirect,
    withRouter*/
} from "react-router-dom";

import Statistics from '../Statistics/Statistics';
import Users from '../Users/Users';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src="favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="" />
                            &nbsp;Dashboard
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/statistics">Statistics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">Users</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        {routes.map((route, i) => (
                            <ChildRoutes key={i} {...route} />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

const routes = [
    {
        path: "/statistics",
        component: Statistics
    },
    {
        path: "/users",
        component: Users
    }
    /*{
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }*/
];

function ChildRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default Dashboard;