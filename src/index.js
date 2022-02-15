import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./Global/globalStyles";
import { MyRouter } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MyRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
