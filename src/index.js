import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import App from "./App/App.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
