import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import $ from "jquery";
import Popper from "popper.js";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "assets/styles/scss/sb-admin-2.scss";

import { Provider } from "react-redux";
import store from "./store";
import ScrollToTop from "components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ScrollToTop />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
