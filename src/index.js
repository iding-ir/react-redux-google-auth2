import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./stores";
import App from "./components/app";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
