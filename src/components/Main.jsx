import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Info, Portfolio, Resume } from "./";

const Main = () => {
  return (
    <div id="main">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Info />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default Main;
