// index.js is the bridge between the component creates in App.js and the web browser

// brings all the necessary pieces together
import React, { StrictMode } from "react"; // react
import { createRoot } from "react-dom/client"; // react's library to talk to web browsers (react DOM)
import "./styles.css"; // styles for components

import App from "./App"; // component created in App.js

// brings all the pieces together and injects the final product into index.html in the public folder
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);