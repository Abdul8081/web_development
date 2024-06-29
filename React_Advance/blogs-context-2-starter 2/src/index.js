import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // for using of the routes , we have to put the app in the Broweser Router
  <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
  </BrowserRouter>

);
