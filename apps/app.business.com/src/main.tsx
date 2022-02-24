import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { injectAnalyzeHead } from "./scripts/analyze-head";

import "./global.scss";

injectAnalyzeHead();

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);
