import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // here we are using provider for the, linking the redux with the react code
  <Provider  store={store} >
      <App />
  </Provider>
);
