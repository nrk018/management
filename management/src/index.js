import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Use createRoot for React 18
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")); // ✅ Correct way
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);