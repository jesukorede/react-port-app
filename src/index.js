import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
  <React.StrictMode>
    <HashRouter>
     <App />
    </HashRouter>
  </React.StrictMode>
  );


// ReactDOM.render(
//   <HashRouter basename="/react-port-app">
//   <App />
//   </HashRouter>,
//   document.getElementById("root")
// );