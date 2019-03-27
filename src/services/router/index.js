import React from "react";

import { Route, Redirect } from "react-router-dom";

import Dashboard from "../../views/Dashboard/Dashboard";
import Statistics from "../../views/Statistics/Statistics";
import Users from "../../views/Users/Users";

const Routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    routes: [
      {
        path: "/dashboard/statistics",
        component: Statistics
      },
      {
        path: "/dashboard/users",
        component: Users
      }
    ]
  }
];

export function ChildRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function NoMatch({ location }) {
  //If route does not exist: redirect to existing route.
  return (
    <Redirect
      to={{
        pathname: "/dashboard/statistics"
      }}
    />
  );
}

export default Routes;
