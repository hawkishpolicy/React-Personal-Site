import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <Main />
  </Router>
);
