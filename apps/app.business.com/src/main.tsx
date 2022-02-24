import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { injectAnalyzeHead } from "./scripts/analyze-head";
import { injectAnalyzeSpacing } from "./scripts/analyze-spacing";

import "./global.scss";

if (import.meta.env.MODE === "development") {
   injectAnalyzeSpacing();
}

injectAnalyzeHead();

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);
