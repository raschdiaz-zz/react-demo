import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Bootstrap Imports
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.slim.min.js";
import "../node_modules/popper.js/dist/popper.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

//Redux
import { Provider } from "react-redux";
import store from "./services/session/store";

//HttpService
import * as Unstated from "unstated";

ReactDOM.render(
  <Provider store={store}>
    <Unstated.Provider>
      <App />
    </Unstated.Provider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
