import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//react js version 18 under
// ReactDOM.render(
//   <h1>Hello React from scratch</h1>,

//   document.getElementById("root")
// );
