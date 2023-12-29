import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {legacy_createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
