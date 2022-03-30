import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./font/Asap-VariableFont_wght.ttf";
import "./font/static/Asap-Medium.ttf";
import "./font/static/Asap-Regular.ttf";
import "./font/LexendDeca-VariableFont_wght.ttf";
import "./font/TitanOne-Regular.ttf";
import "./font/static/LexendDeca-Bold.ttf";
import "./font/static/LexendDeca-Regular.ttf";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
