import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/index";
import App from "./App";
import thunk from "redux-thunk";
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
