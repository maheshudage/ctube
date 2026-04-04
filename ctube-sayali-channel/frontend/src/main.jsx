import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ REMOVE DEFAULT WHITE MARGIN
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "black";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);