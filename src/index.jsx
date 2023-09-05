import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Apropos from "./pages/aPropos";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
