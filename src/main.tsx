// main.ts
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import routes from "~react-pages";
console.log(routes);

const RouterView = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <RouterView />
    </Router>
  </React.StrictMode>
);
