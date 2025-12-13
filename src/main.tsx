import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initLenis } from "./lib/lenis";

initLenis({
  duration: 2.5,
  wheelMultiplier: 0.4,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App />
);