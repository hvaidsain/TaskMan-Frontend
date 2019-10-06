import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "tachyons";
import { Provider } from "react-redux";
import Store from "./store/Store";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
